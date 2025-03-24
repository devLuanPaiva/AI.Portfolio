"use client"
import Curriculum from "@/components/document/Curriculum"
import Landing from "@/components/Landing/Landing"
import ProjectsList from "@/components/projects/ProjectsList"
import Container from "@/components/template/Container"
import { useProjects } from "@/data/hooks/useProjects"
import { useTechnologies } from "@/data/hooks/useTechnologies"
import { Suspense } from "react"

export default function Home() {
	const { technologies, highlightedTechnologies, loading } = useTechnologies()
	const { gameProjects, highlightedProjects, mobileProjects, webProjects } =
		useProjects()
	if (loading) return

	return (
		<Suspense fallback={<p>carregando...</p>}>
			<Landing technologies={highlightedTechnologies} />
			<Container classStyle="py-20 flex flex-col gap-7">
				<ProjectsList
					title="Destaques"
					projects={[
						...highlightedProjects,
						...highlightedProjects,
						...highlightedProjects,
					]}
				/>
				<ProjectsList title="Web" projects={webProjects} />
				<ProjectsList title="Mobile" projects={mobileProjects} />
				<ProjectsList title="Jogos" projects={gameProjects} />
				<Curriculum technologies={technologies} />
			</Container>
		</Suspense>
	)
}
