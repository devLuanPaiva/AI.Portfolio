"use client"
import { cn } from "@/lib/utils"
import { ProjectItem } from "./ProjectItem"
import { useScrollerAnimation } from "@/data/hooks"
import { ProjectsProps } from "@/data/models/interfaces"

export function ProjectsList(props: Readonly<ProjectsProps>) {
	const { containerRef, scrollerRef, start } = useScrollerAnimation()
	return (
		<section>
			<h3 className="text-xl sm:text-2xl font-bold text-white/70">
				{props.title}{" "}
			</h3>
			<div
				ref={containerRef}
				className={cn(
					"scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
				)}
			>
				<ul
					ref={scrollerRef}
					className={cn(
						"flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
						start && "animate-scroll",
						"hover:[animation-play-state:paused]"
					)}
				>
					{props.projects.map((project, index) => (
						<ProjectItem key={index} project={project} />
					))}
				</ul>
			</div>
		</section>
	)
}
