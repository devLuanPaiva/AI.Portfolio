import { MinCV } from "./MinCV";
import { Experience } from "./Experience";
import { TechnologiesWorked } from "./TechnologiesWorked";
import { TechnologiesProps } from "@/data/models/interfaces";

export function Curriculum(props: Readonly<TechnologiesProps>) {
    return (
        < section className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
            <MinCV />
            <Experience />
            <TechnologiesWorked technologies={props.technologies} />
        </ section>
    )
}