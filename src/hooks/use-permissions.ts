"use client";

import { roleHasPermission } from "@/constants/permissions";
import type { Permission } from "@/constants/permissions";
import type { Role } from "@/constants/roles";
import { useSession } from "next-auth/react";

export function usePermissions() {
  const { data: session } = useSession();
  const role = session?.user?.role;

  function can(permission: Permission): boolean {
    if (!role) return false;
    return roleHasPermission(role, permission);
  }

  function hasRole(roles: Role[]): boolean {
    if (!role) return false;
    return roles.includes(role);
  }

  return { role, can, hasRole, user: session?.user };
}
