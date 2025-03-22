import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";

import "@/styles/globals.css";
import styles from "@/styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <section className={styles.container}>
            <nav ></nav>

            <header className={styles.header}>

            </header>

            <main className={styles.main}>{children}</main>

            <footer className={styles.footer}>

            </footer>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
