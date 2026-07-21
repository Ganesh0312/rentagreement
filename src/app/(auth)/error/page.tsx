import { PagePlaceholder } from "@/components/common/server/PageHeader";

export default function AuthErrorPage() {
  return (
    <PagePlaceholder
      title="Authentication error"
      description="Something went wrong during sign in. Please try again."
    />
  );
}
