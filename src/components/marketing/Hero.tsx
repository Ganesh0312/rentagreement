import Link from "next/link";
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  BadgeCheck,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ── Features ─────────────────────────────────── */
const features = [
  {
    icon: FileText,
    title: "Digital agreement drafting",
    description:
      "Create state-compliant rent agreements with guided step-by-step forms — no legal expertise required.",
    color: "from-blue-500/20 to-indigo-500/20",
    iconColor: "text-indigo-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure registration",
    description:
      "Verified documents, full audit trails, and role-based access for every stakeholder in the process.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-600",
  },
  {
    icon: Zap,
    title: "Fast turnaround",
    description:
      "Submit, pay, and track your agreement status from a single dashboard. Done in under 24 hours.",
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-600",
  },
];

/* ── Stats ─────────────────────────────────────── */
const stats = [
  { value: "50,000+", label: "Agreements registered" },
  { value: "28", label: "States covered" },
  { value: "< 24h", label: "Average turnaround" },
  { value: "4.9 ★", label: "Customer rating" },
];

/* ── Steps ─────────────────────────────────────── */
const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Fill out the form",
    description:
      "Enter landlord, tenant, and property details using our guided smart form.",
  },
  {
    number: "02",
    icon: CreditCard,
    title: "Pay securely",
    description:
      "Choose a plan and pay online. We support UPI, cards, and net banking.",
  },
  {
    number: "03",
    icon: BadgeCheck,
    title: "Get registered",
    description:
      "Your agreement is processed and delivered as a legally registered document.",
  },
];

/* ── Hero ──────────────────────────────────────── */
export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-mesh">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/3 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            <Star className="size-3.5 fill-current" />
            Trusted by 50,000+ landlords & tenants across India
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up delay-100 text-4xl font-extrabold tracking-tight leading-tight md:text-6xl">
            Register rent agreements{" "}
            <span className="text-gradient">online — legally,</span>
            <br />
            securely, fast
          </h1>

          {/* Sub-headline */}
          <p className="animate-fade-in-up delay-200 mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
            Draft, review, pay, and register rental agreements across India with
            a modern platform built for landlords, tenants, and registration agents.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-300 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="group gap-2 px-6 shadow-md hover:shadow-lg hover:shadow-primary/30 transition-all duration-200"
              asChild
            >
              <Link href="/register">
                Start your agreement
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 hover:bg-accent/80" asChild>
              <Link href="/how-it-works">See how it works</Link>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="animate-fade-in-up delay-400 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {["No hidden fees", "100% legal & valid", "Aadhaar eSign support"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle2 className="size-3.5 text-emerald-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Stats Strip ───────────────────────────────── */
export function StatsStrip() {
  return (
    <section className="border-y bg-muted/40 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Features ──────────────────────────────────── */
export function Features() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Platform features
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Everything you need
          </h2>
          <p className="mt-4 text-muted-foreground">
            A complete workflow from draft to registered agreement — in one place.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-hover group rounded-2xl border bg-card p-6 shadow-sm"
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color}`}
              >
                <feature.icon className={`size-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── How It Works ──────────────────────────────── */
export function HowItWorksStrip() {
  return (
    <section className="border-y bg-muted/30 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Simple process
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-muted-foreground">
            Three simple steps to a fully registered rent agreement.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Connector line (except last) */}
              {i < steps.length - 1 && (
                <div className="absolute top-6 left-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-border md:block" />
              )}
              <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md shadow-primary/30">
                {step.number}
              </div>
              <step.icon className="mb-3 size-7 text-primary/70" />
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Section ───────────────────────────────── */
export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-indigo-700 px-8 py-14 text-primary-foreground md:px-14">
          {/* Decorative blob */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-8 left-1/3 h-48 w-48 rounded-full bg-amber-400/20 blur-2xl" />

          <div className="relative max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
              Get started today
            </p>
            <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
              Ready to register your agreement?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
              Create an account in minutes and start your rent agreement
              registration today — no paperwork, no delays.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 shadow-lg font-semibold transition-all duration-200"
                asChild
              >
                <Link href="/register">Create free account</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                asChild
              >
                <Link href="/contact">Talk to us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
