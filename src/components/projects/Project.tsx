"use client"
import { Readme } from "./Readme"
import { useProjectId } from "@/data/hooks"
import { useEffect, useState } from "react"
import { ProjectFrame } from "./ProjectFrame"
import { fetchReadme } from "@/data/functions"
import { Container } from "../template/Container"
import { ProjectImagesList } from "./ProjectImagesList"
import { Technologies } from "../technologies/Technologies"

export function Project(props: Readonly<{ id: string }>) {
	const [readme, setReadme] = useState<string>("")
	const { project } = useProjectId(props.id)

	useEffect(() => {
		if (project?.repository) {
			fetchReadme(project.repository)
				.then(setReadme)
				.catch(() => setReadme("Erro ao carregar README"))
		}
	}, [project?.repository])

	if (!project) return null
	return (
		<section>
			<Container classStyle="py-7 flex flex-col items-center gap-10">
				<h1 className="text-3xl font-bold self-start">
					{project?.name ?? "Não encontrado"}
				</h1>
				<ProjectImagesList images={project.images.slice(1)} />
				<Technologies smallerSize technologies={project?.technologies ?? []} />
				{project.frame && <ProjectFrame frame={project.frame} />}
				<Readme markdown={readme} />
			</Container>
		</section>
	)
}
