import { Metadata } from "next";
import type { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { StoreProvider } from "./StoreProvider";
import { ResponsiveHandler } from "@/components/utils/ResponsiveHandler";
import { Nav } from "@/components/organisms/Nav";
import { Footer } from "@/components/organisms/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Choose your Skip",
  description: "Dummy page for Skip selection",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">

      <StoreProvider>
        <body>
          <head>
            <link rel="preconnect" href="https://app.wewantwaste.co.uk" />
            <link rel="preconnect" href="https://va.vercel-scripts.com" />
          </head>
          <Nav />
          <ResponsiveHandler />
          <div className="bg-darkGray min-h-screen"  >
            <main >{children}</main>
          </div>
          <Footer />
          <SpeedInsights />
        </body>
      </StoreProvider>
    </html>
  );
}
