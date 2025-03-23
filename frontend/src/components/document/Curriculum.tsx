import { TechnologiesProps } from "@/data/interfaces";
import TechnologiesWorked from "./TechnologiesWorked";
import Experience from "./Experience";

export default function Curriculum(props: Readonly<TechnologiesProps> ){
    return(
       < section className="flex flex-col lg:flex-row gap-4 min-h-72 w-full">
        <div className="flex-1"></div>
           <Experience/>
           <TechnologiesWorked technologies={props.technologies} />
       </ section>
    )
}