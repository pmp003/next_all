import InvoiceChart from "@/components/InvoiceChart"
import LatestInvoices from "@/components/LatestInvoices"
import InvoiceChartSkeleton from "@/components/skeletons/InvoiceChartSkeleton"
import LatestInvoicesSkeleton from "@/components/skeletons/LatestInvoiceSkeleton"
import { Suspense } from "react"

export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return (
        <div className="border border-teal-600 p-3 rounded-sm w-full">
            <span className="text-lg"> Invoices Page </span>
            <div className="flex justify-around">
                <Suspense fallback={<InvoiceChartSkeleton />}>
                    <InvoiceChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </div>
    )
}
