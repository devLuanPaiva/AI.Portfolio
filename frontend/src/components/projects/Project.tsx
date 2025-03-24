"use client"
import { fetchReadme } from "@/data/functions/fetchReadme"
import { useProjectId } from "@/data/hooks/useProjects"
import { useEffect, useState } from "react"
import Container from "../template/Container"
import ProjectImagesList from "./ProjectImagesList"
import Technologies from "../technologies/Technologies"
import Readme from "./Readme"

export default function Project(props: Readonly<{ id: string }>) {
	const [readme, setReadme] = useState<string>("")
	const { loading, project } = useProjectId(props.id)

	useEffect(() => {
		if (project?.repository) {
			fetchReadme(project.repository)
				.then(setReadme)
				.catch(() => setReadme("Erro ao carregar README"))
		}
	}, [project?.repository])

	if (loading) return <p>Carregando...</p>
	if (!project) return null
	return (
		<section>
			<Container classStyle="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">
					{project?.name ?? "Não encontrado"}
				</h1>

				<ProjectImagesList images={project.images.slice(1)} />
				<Technologies smallerSize technologies={project?.technologies ?? []} />
				<Readme markdown={readme} />
			</Container>
		</section>
	)
}
