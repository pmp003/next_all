'use client'

import { use } from "react";

export default function InvoiceParticipants({ dataPromise }) {
    const data = use(dataPromise);
    return (
        <div>InvoiceParticipants - {dataPromise}</div>
    )
}
