"use client"
import Project from "@/components/projects/Project"
import { Suspense } from "react"

export default async function PageProject(
	props: Readonly<{ params: Promise<{ id: string }> }>
) {
	const { id } = await props.params
	return (
		<Suspense fallback={<p>Carregando...</p>}>
			<Project id={id} />
		</Suspense>
	)
}
