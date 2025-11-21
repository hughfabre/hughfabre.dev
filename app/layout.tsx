import { Background } from "@/components/atoms/background";
import { WappalyzerSpoofer } from "@/components/atoms/wappalyzer-spoofer";
import { Footer } from "@/components/organisms/footer";
import { Header } from "@/components/organisms/header";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
  adjustFontFallback: false,
});

const archivoNarrow = localFont({
  src: "./fonts/ArchivoNarrow-Regular.woff2",
  variable: "--font-archivo-narrow",
  weight: "400",
  display: "swap",
  preload: false,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Hugh Fabre",
  description: "A solo web engineer.",
  metadataBase: new URL("https://hughfabre.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hughfabre.dev",
    title: "Hugh Fabre",
    description: "A solo web engineer.",
    siteName: "Hugh Fabre",
  },
  twitter: {
    card: "summary",
    title: "Hugh Fabre",
    description: "A solo web engineer.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  other: {
    robots: "noai, noimageai",
    googlebot: "noarchive",
    "googlebot-news": "nosnippet",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f7f7" },
    { media: "(prefers-color-scheme: dark)", color: "#262626" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${archivoNarrow.variable} font-sans antialiased`}
        style={{ fontFamily: "var(--font-satoshi)", fontWeight: "500" }}
      >
        <Script
          id="wappalyzer-obfuscation"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(){if(typeof window!=='undefined'){try{Object.defineProperty(window,'__REACT_DEVTOOLS_GLOBAL_HOOK__',{value:undefined,writable:false,configurable:false});}catch(e){}}})();`,
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <WappalyzerSpoofer />
          <Background />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
