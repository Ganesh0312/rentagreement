import Link from "next/link";
import { Home, Mail, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site.config";

const footerLinks = {
  Product: [
    { label: "How it works", href: "/how-it-works" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "States", href: "/states" },
  ],
  Legal: [
    { label: "Terms of service", href: "/legal/terms" },
    { label: "Privacy policy", href: "/legal/privacy" },
    { label: "Refund policy", href: "/legal/refund-policy" },
  ],
  Company: [
    { label: "About us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Support", href: siteConfig.links.support },
  ],
};

export function MarketingFooter() {
  return (
    <footer className="border-t bg-muted/30">
      {/* Gradient accent line */}
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm">
                <Home className="size-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold tracking-tight">{siteConfig.name}</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {siteConfig.description}
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <ExternalLink className="size-3.5" />
              </a>
              <a
                href={siteConfig.links.support}
                className="flex h-8 w-8 items-center justify-center rounded-md border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                aria-label="Email support"
              >
                <Mail className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <p className="mb-4 text-sm font-semibold text-foreground">{group}</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-4 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>
            Made with <span className="text-red-500">♥</span> for India
          </p>
        </div>
      </div>
    </footer>
  );
}
