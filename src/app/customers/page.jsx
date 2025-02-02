export default async function Page() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return (
        <div className="border border-teal-600 p-3 rounded-sm">Customers</div>
    )
}
