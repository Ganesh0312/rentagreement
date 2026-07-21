export const siteConfig = {
  name: "RentReg",
  description:
    "Register rent agreements online — fast, legal, and hassle-free across India.",
  url: process.env.AUTH_URL ?? "http://localhost:3000",
  links: {
    support: "mailto:support@rentreg.in",
    twitter: "https://twitter.com/rentreg",
  },
} as const;
