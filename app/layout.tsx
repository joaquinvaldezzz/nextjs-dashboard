import type { ReactNode } from "react";

import { inter } from "./ui/fonts";

import "./ui/global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className={inter.className} lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
