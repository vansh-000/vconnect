export default async function Meeting({ params }: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    return <div>Meeting Link : #{id}</div>
}