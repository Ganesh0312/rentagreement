"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Home } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "States", href: "/states" },
];

export function MarketingHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={() => setMobileOpen(false)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm group-hover:shadow-md group-hover:shadow-primary/30 transition-all duration-200">
            <Home className="size-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                )}
              >
                {link.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
          <Button
            size="sm"
            className="bg-primary text-primary-foreground shadow-sm hover:shadow-md hover:shadow-primary/30 transition-all duration-200"
            asChild
          >
            <Link href="/register">Get started</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden items-center justify-center rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent/60 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="glass border-t md:hidden animate-fade-in">
          <div className="container mx-auto flex flex-col gap-1 px-4 pb-4 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-accent text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button variant="outline" asChild>
                <Link href="/login" onClick={() => setMobileOpen(false)}>
                  Sign in
                </Link>
              </Button>
              <Button asChild>
                <Link href="/register" onClick={() => setMobileOpen(false)}>
                  Get started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
