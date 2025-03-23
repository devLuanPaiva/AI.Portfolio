'use client'
import { ProjectsProps } from "@/data/interfaces";
import ProjectItem from "./ProjectItem";
import { cn } from "@/lib/utils";
import { useScrollerAnimation } from "@/data/hooks/useScrollerAnimation";

export default function ProjectsList(props: Readonly<ProjectsProps>) {
    const { containerRef, scrollerRef, start } = useScrollerAnimation()
    return (
        <section>
            <h3 className="text-2xl font-bold text-white/70">{props.title} </h3>
            <div ref={containerRef}
                className={cn(
                    "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
                )}>
                <ul ref={scrollerRef}
                    className={cn(
                        "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
                        start && "animate-scroll", "hover:[animation-play-state:paused]",
                    )}>
                    {props.projects.map((project) => (
                        <ProjectItem key={project.id} project={project} />
                    ))}
                </ul>
            </div>
        </section>
    )
}