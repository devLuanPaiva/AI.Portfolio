"use client"
import { Suspense } from "react"
import { Loading } from "@/components/shared"
import { MyJob } from "@/components/job/MyJob"
import { Landing } from "@/components/Landing/Landing"
import { Contacts } from "@/components/contacts/Contacts"
import { Container } from "@/components/template/Container"
import { useProjects, useTechnologies } from "@/data/hooks"
import { Curriculum } from "@/components/document/Curriculum"
import { ProjectsList } from "@/components/projects/ProjectsList"


export default function Home() {
	const { technologies, highlightedTechnologies } = useTechnologies()
	const { highlightedProjects, mobileProjects, webProjects } = useProjects()

	return (
		<Suspense fallback={<Loading message="Carregando..." />}>
			<Landing technologies={highlightedTechnologies} />
			<Container classStyle="py-20 flex flex-col gap-7 space-y-10">
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
				<Curriculum technologies={technologies} />
				<MyJob />
			</Container>
			<Contacts />
		</Suspense>
	)
}
