import { TechnologiesProps } from "@/data/interfaces";
import TechnologiesWorked from "./TechnologiesWorked";
import Experience from "./Experience";
import MinCV from "./MinCV";

export function Curriculum(props: Readonly<TechnologiesProps>) {
    return (
        < section className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
            <MinCV />
            <Experience />
            <TechnologiesWorked technologies={props.technologies} />
        </ section>
    )
}