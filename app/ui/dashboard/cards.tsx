import { BanknotesIcon, ClockIcon, InboxIcon, UserGroupIcon } from "@heroicons/react/24/outline";

import { fetchCardData } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";

const iconMap = {
  collected: BanknotesIcon,
  customers: UserGroupIcon,
  pending: ClockIcon,
  invoices: InboxIcon,
};

export default async function CardWrapper() {
  const { numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices } =
    await fetchCardData();

  return (
    <>
      <Card type="collected" value={totalPaidInvoices} title="Collected" />
      <Card type="pending" value={totalPendingInvoices} title="Pending" />
      <Card type="invoices" value={numberOfInvoices} title="Total Invoices" />
      <Card type="customers" value={numberOfCustomers} title="Total Customers" />
    </>
  );
}

export function Card({
  title,
  value,
  type,
}: {
  title: string;
  value: number | string;
  type: "invoices" | "customers" | "pending" | "collected";
}) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-xs">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
