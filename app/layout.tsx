import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { ResponsiveHandler } from '@/components/utils/ResponsiveHandler';

import "@/styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <ResponsiveHandler />
          <div className="bg-gray-400 min-h-screen"  >
            <main >{children}</main>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
