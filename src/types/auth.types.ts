import type { Role } from "@/constants/roles";

export type { Role };

export interface SessionUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  emailVerified?: Date | null;
  image?: string | null;
}

declare module "next-auth" {
  interface Session {
    user: SessionUser;
  }

  interface User {
    id: string;
    role: Role;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id: string;
    role: Role;
  }
}
