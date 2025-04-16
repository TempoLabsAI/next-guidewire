import { TempoInit } from "@/components/tempo-init";
import Script from "next/script";
import { JutroThemeClient } from "@/components/JutroThemeClient";
import "./globals.css";
import '../styles/index.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body>
        <JutroThemeClient>
          {children}
        </JutroThemeClient>
        <TempoInit />
      </body>
    </html>
  );
}
