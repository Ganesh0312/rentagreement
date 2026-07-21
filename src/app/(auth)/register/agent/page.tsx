import { RegisterForm } from "@/components/auth/RegisterForm";
import { ROLES } from "@/constants/roles";

export default function AgentRegisterPage() {
  return <RegisterForm defaultRole={ROLES.AGENT} />;
}
