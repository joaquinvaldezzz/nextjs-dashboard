import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import { clsx } from "clsx";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
  return (
    <nav className="mb-6 block" aria-label="Breadcrumb">
      <ol className={clsx(lusitana.className, "flex text-xl md:text-2xl")}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            className={clsx(breadcrumb.active ? "text-gray-900" : "text-gray-500")}
            aria-current={breadcrumb.active}
            key={breadcrumb.href}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? <span className="mx-3 inline-block">/</span> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
