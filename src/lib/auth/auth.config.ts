import type { NextAuthConfig } from "next-auth";
import { DASHBOARD_HOME, type Role } from "@/constants/roles";
import {
  ADMIN_ROUTES_PREFIX,
  AGENT_ROUTES_PREFIX,
  AUTH_ROUTES,
  CUSTOMER_ROUTES_PREFIX,
} from "@/constants/routes";

export const authConfig = {
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "development-secret-min-32-characters-long",
  pages: {
    signIn: "/login",
    error: "/error",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const pathname = nextUrl.pathname;

      const isAuthRoute = AUTH_ROUTES.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`),
      );

      const isProtectedRoute =
        pathname.startsWith(CUSTOMER_ROUTES_PREFIX) ||
        pathname.startsWith(AGENT_ROUTES_PREFIX) ||
        pathname.startsWith(ADMIN_ROUTES_PREFIX);

      if (isAuthRoute) {
        if (isLoggedIn && auth?.user?.role) {
          const role = auth.user.role as Role;
          const target = DASHBOARD_HOME[role] ?? "/customer";
          return Response.redirect(new URL(target, nextUrl));
        }
        return true;
      }

      if (isProtectedRoute) {
        return isLoggedIn;
      }

      return true;
    },
    jwt({ token, user }) {
      if (user) {
        if (user.id) token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = (token.id as string) ?? "";
        if (token.role) {
          session.user.role = token.role as Role;
        }
      }
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
