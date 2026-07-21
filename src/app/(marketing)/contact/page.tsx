import { PageHeader, PagePlaceholder } from "@/components/common/server/PageHeader";

export default function ContactPage() {
  return (
    <div className="container mx-auto space-y-6 px-4 py-12">
      <PageHeader title="Contact" description="Get in touch with our support team." />
      <PagePlaceholder title="Contact form" description="Contact form and support details will appear here." />
    </div>
  );
}
