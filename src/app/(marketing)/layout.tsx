import { MarketingFooter } from "@/components/layout/marketing/Footer";
import { MarketingHeader } from "@/components/layout/marketing/Header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MarketingHeader />
      <main className="flex-1">{children}</main>
      <MarketingFooter />
    </>
  );
}
