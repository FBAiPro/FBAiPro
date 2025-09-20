import type { Metadata } from "next";
import "../styles/globals.css";
import { Providers } from "@/components/providers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FBAiPro",
  description: "AI-powered Amazon FBA platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased bg-background text-foreground">
        <Providers>
          <header className="border-b border-border">
            <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
              <Link href="/homepage" className="font-semibold">FBAiPro</Link>
              <nav className="space-x-4">
                <Link href="/homepage">Homepage</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/login">Login</Link>
              </nav>
            </div>
          </header>
          <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
