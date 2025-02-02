export default async function InvoiceChart() {
    await new Promise(res => setTimeout(res, 3000));
    return (
        <div className="border border-teal-300 p-3 rounded-sm">Invoice Chart</div>
    )
}
