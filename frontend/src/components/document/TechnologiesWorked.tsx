import { TechnologiesProps } from "@/data/interfaces";

export default function TechnologiesWorked(props: Readonly<TechnologiesProps>) {
    if (!props.technologies) return null
    return (
        <section className="flex justify-center items-center p-6 w-full lg:w-72 bg-black border-b-zinc-800 border-2 rounded-2xl ">
            <ul className="flex justify-center flex-wrap gap-4">
                {props.technologies.map((tech) => (
                    <li key={tech.id}>
                        <h3>
                            <span className="text-red-500 font-bold">#</span>
                            {' '}{tech.name}
                        </h3>
                    </li>
                ))}
            </ul>
        </section>
    )
}