import { TechnologiesProps } from "@/data/interfaces";

export default function TechnologiesWorked(props: Readonly<TechnologiesProps>) {
    if (props.technologies.length <= 0) return null
    return (
        <section className="flex justify-center items-center p-6 gap-5">
            {props.technologies.map((tech) => (
                <article key={tech.id}>
                    <h3>{tech.name} </h3>
                </article>
            ))}
        </section>
    )
}