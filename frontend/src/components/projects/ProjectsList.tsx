'use client'
import { ProjectsProps } from "@/data/interfaces";
import ProjectItem from "./ProjectItem";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export default function ProjectsList(props: Readonly<ProjectsProps>) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                "forwards",
            );
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty("--animation-duration", "80s");
        }
    };
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