import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { AuthSessionProvider } from "@/components/providers/SessionProvider";
import { AppToaster } from "@/components/providers/ToastProvider";
import { siteConfig } from "@/config/site.config";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthSessionProvider>
          {children}
          <AppToaster />
        </AuthSessionProvider>
      </body>
    </html>
  );
}
