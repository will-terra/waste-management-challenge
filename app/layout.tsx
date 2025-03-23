import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import { ResponsiveHandler } from '@/components/utils/ResponsiveHandler';
import { Nav } from "@/components/organisms/Nav";
import "@/styles/globals.css";

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
          <div className="bg-darkGray min-h-full md:min-h-screen"  >
            <main >{children}</main>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
