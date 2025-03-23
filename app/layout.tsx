import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { ResponsiveHandler } from '@/components/utils/ResponsiveHandler';

import "@/styles/globals.css";
import { Nav } from "@/components/Nav";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <Nav />
          <ResponsiveHandler />
          <div className="bg-darkGray min-h-screen"  >
            <main >{children}</main>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
