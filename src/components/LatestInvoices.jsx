import { Suspense } from "react";
import InvoiceParticipants from "./InvoiceParticipants";

async function fetchParticipants() {
    return new Promise((res) => setTimeout(() => { res('Data Correct') }, 4000))
}
export default async function LatestInvoices() {
    await new Promise(res => setTimeout(res, 2000));
    return (
        <div className="border border-teal-300 p-3 rounded-sm">
            Latest Invoices
            <Suspense fallback={<div className="border border-teal-400 rounded p-3 animate-pulse">Loading Participants ...</div>}>
                <InvoiceParticipants dataPromise={fetchParticipants()} />
            </Suspense>
        </div>
    )
}
