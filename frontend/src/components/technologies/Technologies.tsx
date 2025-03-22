import { TechnologiesProps } from "@/data/interfaces";
import Image from "next/image";

export default function Technologies(props: Readonly<TechnologiesProps>) {
    return props.technologies ? (
        <ul className="flex justify-center gap-4 flex-wrap w-[75%]">
            {props.technologies.map((tech) => (
                <li key={tech.id} className="flex flex-col items-center gap-1">
                    <figure className="relative h-8 w-8 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-md sm:rounded-xl overflow-hidden">
                        <Image
                            src={tech.image}
                            alt={tech.description}
                            fill
                            className="object-contain"
                        />
                    </figure>
                    <figcaption className="text-[10px] text-zinc-400">
                        {tech.name}
                    </figcaption>
                </li>
            ))}
        </ul>
    ) : null
}