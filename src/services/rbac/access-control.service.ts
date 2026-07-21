import type { Permission } from "@/constants/permissions";
import { roleHasPermission } from "@/constants/permissions";
import type { Role } from "@/constants/roles";
import { ROLES } from "@/constants/roles";
import { ForbiddenError } from "@/lib/errors/AppError";
import type { ResourceOwnership } from "@/types/rbac.types";

export function assertAuthenticated(
  user: { id: string; role: Role } | null | undefined,
): asserts user is { id: string; role: Role } {
  if (!user?.id) {
    throw new ForbiddenError("Authentication required");
  }
}

export function assertPermission(role: Role, permission: Permission): void {
  if (!roleHasPermission(role, permission)) {
    throw new ForbiddenError(`Missing permission: ${permission}`);
  }
}

export function assertRole(role: Role, allowed: Role[]): void {
  if (!allowed.includes(role)) {
    throw new ForbiddenError("Insufficient role privileges");
  }
}

export function canAccessAgreement(
  user: { id: string; role: Role },
  agreement: ResourceOwnership,
): boolean {
  if (user.role === ROLES.ADMIN || user.role === ROLES.SUPER_ADMIN) {
    return true;
  }

  if (user.role === ROLES.CUSTOMER) {
    return agreement.customerId === user.id;
  }

  if (user.role === ROLES.AGENT) {
    return agreement.agentId === user.id;
  }

  return false;
}

export function assertAgreementAccess(
  user: { id: string; role: Role },
  agreement: ResourceOwnership,
): void {
  if (!canAccessAgreement(user, agreement)) {
    throw new ForbiddenError("You cannot access this agreement");
  }
}
