import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth/auth.config";
import {
  ADMIN_ROUTES_PREFIX,
  AGENT_ROUTES_PREFIX,
  CUSTOMER_ROUTES_PREFIX,
} from "@/constants/routes";
import { DASHBOARD_HOME, ROLES } from "@/constants/roles";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const role = req.auth?.user?.role;

  if (pathname.startsWith(CUSTOMER_ROUTES_PREFIX)) {
    if (role !== ROLES.CUSTOMER) {
      return Response.redirect(
        new URL(role ? DASHBOARD_HOME[role] : "/login", req.url),
      );
    }
  }

  if (pathname.startsWith(AGENT_ROUTES_PREFIX)) {
    if (role !== ROLES.AGENT) {
      return Response.redirect(
        new URL(role ? DASHBOARD_HOME[role] : "/login", req.url),
      );
    }
  }

  if (pathname.startsWith(ADMIN_ROUTES_PREFIX)) {
    if (role !== ROLES.ADMIN && role !== ROLES.SUPER_ADMIN) {
      return Response.redirect(
        new URL(role ? DASHBOARD_HOME[role] : "/login", req.url),
      );
    }
  }
});

export const config = {
  matcher: [
    "/customer/:path*",
    "/agent/:path*",
    "/admin/:path*",
    "/login",
    "/register/:path*",
    "/forgot-password",
    "/reset-password",
  ],
};
