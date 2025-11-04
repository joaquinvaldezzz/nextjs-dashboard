"use client";

import { useActionState } from "react";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import { createInvoice } from "@/app/lib/actions";
import { Button } from "@/app/ui/button";

import type { State } from "@/app/lib/actions";
import type { CustomerField } from "@/app/lib/definitions";

export default function Form({ customers }: { customers: CustomerField[] }) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(createInvoice, initialState);

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="customer">
            Choose customer
            <div className="relative mt-2">
              <select
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="customer"
                name="customerId"
                aria-describedby="customer-error"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a customer
                </option>
                {customers.map((customer) => (
                  <option value={customer.id} key={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
              <UserCircleIcon className="pointer-events-none absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
            </div>
          </label>

          <div id="customer-error" aria-atomic="true" aria-live="polite">
            {state.errors?.customerId?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="amount">
            Choose an amount
            <div className="relative mt-2 rounded-md">
              <div className="relative">
                <input
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                  id="amount"
                  name="amount"
                  type="number"
                  placeholder="Enter USD amount"
                  aria-describedby="amount-error"
                  step="0.01"
                />
                <CurrencyDollarIcon className="pointer-events-none absolute top-1/2 left-3 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
              </div>
            </div>
          </label>

          <div id="amount-error" aria-atomic="true" aria-live="polite">
            {state.errors?.amount?.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">Set the invoice status</legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <label
                  className="flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                  htmlFor="pending"
                >
                  <input
                    className="mr-2 size-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    id="pending"
                    name="status"
                    type="radio"
                    value="pending"
                    aria-describedby="status-error"
                  />
                  Pending <ClockIcon className="size-4" />
                </label>
              </div>
              <div className="flex items-center">
                <label
                  className="flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                  htmlFor="paid"
                >
                  <input
                    className="mr-2 size-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                    id="paid"
                    name="status"
                    type="radio"
                    value="paid"
                    aria-describedby="status-error"
                  />
                  Paid <CheckIcon className="size-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div id="status-error" aria-atomic="true" aria-live="polite">
          {state.errors?.status?.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          href="/dashboard/invoices"
        >
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}
