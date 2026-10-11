import type { Metadata } from "next";
import { Sora, DM_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AscendWorksNow | ServiceNow Implementation & Enterprise IT Transformation",
  description:
    "AscendWorksNow advises enterprise teams on ServiceNow implementation, platform strategy, Flow Designer, AI Control Tower, Now Assist, and employee experience.",
  keywords: [
    "ServiceNow implementation",
    "enterprise IT consulting",
    "IT transformation",
    "Agentic AI",
    "ITSM",
    "Flow Designer",
    "ServiceNow Otto",
    "Moveworks",
    "AI Control Tower",
    "Now Assist",
    "AscendWorksNow",
  ],
  metadataBase: new URL("https://www.ascendworksnow.com"),
  openGraph: {
    title: "AscendWorksNow | ServiceNow & Enterprise IT Transformation",
    description:
      "ServiceNow strategy and delivery across platform implementation, Flow Designer, AI Control Tower, Now Assist, and employee experience.",
    siteName: "AscendWorksNow",
    url: "https://www.ascendworksnow.com",
    type: "website",
  },
  alternates: {
    canonical: "https://www.ascendworksnow.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
