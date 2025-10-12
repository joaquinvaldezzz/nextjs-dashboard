import type { ReactNode } from "react";
import clsx from "clsx";

import { inter } from "./ui/fonts";

import "./ui/global.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "antialiased")}>{children}</body>
    </html>
  );
}
