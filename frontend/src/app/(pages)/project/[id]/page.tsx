import Project from "@/components/projects/Project"
import Loading from "@/components/shared/Loading"
import { Suspense } from "react"

export default async function PageProject(
	props: Readonly<{ params: Promise<{ id: string }> }>
) {
	const { id } = await props.params
	return (
		<Suspense fallback={<Loading message="Carregando projeto..." />}>
			<Project id={id} />
		</Suspense>
	)
}
