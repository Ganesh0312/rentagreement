import Link from "next/link";
import { CheckCircle2, Home } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const highlights = [
  "Draft agreements in minutes",
  "Legally valid across all 28 states",
  "Secure Aadhaar eSign support",
  "Track status from your dashboard",
  "24/7 customer support",
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* Left decorative panel (desktop only) */}
      <div className="relative hidden md:flex md:w-1/2 lg:w-2/5 flex-col justify-between bg-gradient-to-br from-primary via-primary/90 to-indigo-700 p-10 text-primary-foreground overflow-hidden">
        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 -left-16 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-amber-400/20 blur-2xl" />
        </div>

        {/* Logo */}
        <Link href="/" className="relative flex items-center gap-2 w-fit">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15 backdrop-blur-sm border border-white/20">
            <Home className="size-5 text-white" />
          </div>
          <span className="text-xl font-bold">{siteConfig.name}</span>
        </Link>

        {/* Copy block */}
        <div className="relative space-y-6">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight">
              India's most trusted <br />rent agreement platform
            </h2>
            <p className="mt-3 text-primary-foreground/75 leading-relaxed">
              Join thousands of landlords and tenants who register their agreements the smart way — 100% online, fully legal.
            </p>
          </div>

          <ul className="space-y-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="size-4 shrink-0 text-emerald-300" />
                <span className="text-primary-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom quote */}
        <div className="relative rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
          <p className="text-sm italic text-primary-foreground/80">
            "The fastest and simplest way to register our rent agreement. Highly recommended!"
          </p>
          <p className="mt-2 text-xs font-medium text-primary-foreground/60">— Rahul M., Mumbai</p>
        </div>
      </div>

      {/* Right form panel */}
      <div className="flex flex-1 flex-col items-center justify-center bg-background p-6 md:p-10">
        {/* Mobile logo */}
        <Link href="/" className="mb-8 flex items-center gap-2 md:hidden">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Home className="size-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold">{siteConfig.name}</span>
        </Link>

        <div className="w-full max-w-md animate-fade-in-up">
          {children}
        </div>
      </div>
    </div>
  );
}
