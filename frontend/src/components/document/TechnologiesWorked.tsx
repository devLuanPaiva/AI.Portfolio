import { TechnologiesProps } from "@/data/interfaces";

export default function TechnologiesWorked(props: Readonly<TechnologiesProps>) {
    if (!props.technologies) return null
    return (
        <article className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border-zinc-500 shadow border-2 rounded-2xl ">
            <ul className="flex justify-center flex-wrap gap-4">
                {props.technologies.map((tech) => (
                    <li key={tech.id}>
                        <p className="text-sm sm:text-base">
                            <span className="text-red-500 font-bold">#</span>
                            {' '}{tech.name}
                        </p>
                    </li>
                ))}
            </ul>
        </article>
    )
}