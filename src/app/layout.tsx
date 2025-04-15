import { TempoInit } from "@/components/tempo-init";
import { Inter } from "next/font/google";
import Script from "next/script";
import { JutroThemeClient } from "@/components/JutroThemeClient";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <Script src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js" />
      <body className={inter.className}>
        <JutroThemeClient>
          {children}
        </JutroThemeClient>
        <TempoInit />
      </body>
    </html>
  );
}
