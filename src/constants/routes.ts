export const PUBLIC_ROUTES = [
  "/",
  "/about",
  "/pricing",
  "/how-it-works",
  "/faq",
  "/contact",
  "/blog",
  "/legal/terms",
  "/legal/privacy",
  "/legal/refund-policy",
] as const;

export const AUTH_ROUTES = [
  "/login",
  "/register",
  "/register/agent",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
] as const;

export const CUSTOMER_ROUTES_PREFIX = "/customer";
export const AGENT_ROUTES_PREFIX = "/agent";
export const ADMIN_ROUTES_PREFIX = "/admin";

export const API_AUTH_PREFIX = "/api/auth";
