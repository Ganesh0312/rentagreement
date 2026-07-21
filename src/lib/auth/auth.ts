import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db/connect";
import { UserModel } from "@/models/User.model";
import { loginSchema } from "@/lib/validators/auth.schema";
import { authConfig } from "./auth.config";
import { env } from "@/config/env";
import type { Role } from "@/constants/roles";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: env.authSecret,
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = loginSchema.safeParse(credentials);
        if (!parsed.success) return null;

        await connectDB();

        const user = await UserModel.findOne({
          email: parsed.data.email.toLowerCase(),
          isActive: true,
        }).select("+passwordHash");

        if (!user?.passwordHash) return null;

        const isValid = await bcrypt.compare(
          parsed.data.password,
          user.passwordHash,
        );

        if (!isValid) return null;

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role as Role,
          emailVerified: user.emailVerified,
          image: user.image ?? null,
        };
      },
    }),
  ],
});
