import { notFound } from "next/navigation";
import { INDIAN_STATES } from "@/constants/states";
import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

interface StatePageProps {
  params: Promise<{ stateCode: string }>;
}

export default async function StateLandingPage({ params }: StatePageProps) {
  const { stateCode } = await params;
  const state = INDIAN_STATES.find(
    (item) => item.code.toLowerCase() === stateCode.toLowerCase(),
  );

  if (!state) notFound();

  return (
    <div className="container mx-auto space-y-6 px-4 py-12">
      <PageHeader
        title={`Rent Agreement Registration in ${state.name}`}
        description={`State-specific registration guidance for ${state.name}.`}
      />
      <PagePlaceholder
        title={`${state.name} agreements`}
        description="State-specific templates, stamp duty info, and process details."
      />
    </div>
  );
}
