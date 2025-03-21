export default async function PageProject(props: Readonly<{
    params: Promise<{
        id: string
    }>
}>) {
    const { id } = await props.params
    return (
        <p> {id} </p>
    )
}