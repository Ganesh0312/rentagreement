import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db/connect";
import { ForbiddenError, NotFoundError } from "@/lib/errors/AppError";
import type { RegisterInput } from "@/lib/validators/auth.schema";
import { AgentModel, UserModel } from "@/models";
import { ROLES, type Role } from "@/constants/roles";

function generateReferralCode(name: string): string {
  const prefix = name.replace(/\s+/g, "").slice(0, 4).toUpperCase();
  const suffix = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${prefix}${suffix}`;
}

export async function registerUser(input: RegisterInput) {
  await connectDB();

  const existing = await UserModel.findOne({ email: input.email.toLowerCase() });
  if (existing) {
    throw new ForbiddenError("An account with this email already exists");
  }

  const passwordHash = await bcrypt.hash(input.password, 12);
  const role: Role =
    input.role === ROLES.AGENT ? ROLES.AGENT : ROLES.CUSTOMER;

  const user = await UserModel.create({
    name: input.name,
    email: input.email.toLowerCase(),
    phone: input.phone,
    passwordHash,
    role,
  });

  if (role === ROLES.AGENT) {
    await AgentModel.create({
      userId: user._id,
      referralCode: generateReferralCode(input.name),
      status: "pending",
    });
  }

  return {
    id: user._id.toString(),
    name: user.name,
    email: user.email,
    role: user.role as Role,
  };
}

export async function getUserById(userId: string) {
  await connectDB();
  const user = await UserModel.findById(userId).lean();
  if (!user) throw new NotFoundError("User not found");
  return user;
}
