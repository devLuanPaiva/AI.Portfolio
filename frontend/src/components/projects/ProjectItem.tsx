import { ProjectProps } from "@/data/interfaces";
import Image from "next/image";
import Link from "next/link";

export default function ProjectItem(props: Readonly<ProjectProps>) {
    return (
        <Link href={`/project/${props.project.id}`} >
            <article className="relative rounded-2xl overflow-hidden border border-zinc-800 min-w-64 min-h-64">
                <Image
                    src={props.project.images[0]}
                    alt={props.project.name}
                    fill
                    objectFit="object-cover"
                />
            </article>
        </Link>
    )
}