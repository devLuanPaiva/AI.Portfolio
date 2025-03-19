import { Project } from "../../project"

export default interface Technology {
    id: string
    name: string
    description: string
    image: string
    highlighted: boolean
    projects: Project[]
}