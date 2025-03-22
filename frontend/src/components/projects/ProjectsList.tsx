import { ProjectsProps } from "@/data/interfaces";
import ProjectItem from "./ProjectItem";

export default function ProjectsList(props: Readonly<ProjectsProps>) {
    return (
        <section>
            <h3 className="text-2xl font-bold text-white/70">{props.title} </h3>
            <ul className="flex gap-4 flex-wrap">
                {props.projects.map((project) => (
                    <ProjectItem key={project.id} project={project} />
                ))}
            </ul>
        </section>
    )
}