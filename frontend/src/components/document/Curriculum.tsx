import { TechnologiesProps } from "@/data/interfaces";
import TechnologiesWorked from "./TechnologiesWorked";

export default function Curriculum(props: Readonly<TechnologiesProps> ){
    return(
        <TechnologiesWorked technologies={props.technologies} />
    )
}