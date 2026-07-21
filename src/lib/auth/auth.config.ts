import type { NextAuthConfig } from "next-auth";
import { DASHBOARD_HOME } from "@/constants/roles";
import {
  ADMIN_ROUTES_PREFIX,
  AGENT_ROUTES_PREFIX,
  AUTH_ROUTES,
  CUSTOMER_ROUTES_PREFIX,
} from "@/constants/routes";

export const authConfig = {
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
        if (isLoggedIn) {
          const role = auth.user.role;
          return Response.redirect(new URL(DASHBOARD_HOME[role], nextUrl));
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
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role;
      }
      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
