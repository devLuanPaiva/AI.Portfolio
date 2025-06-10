import { Technology } from "../../../technology"
import { Level } from "../enums/Level.enum"
import { Type } from "../enums/Type.enum"

export default interface Project {
    id: number
    name: string
    description: string
    images: string[]
    level: Level
    type: Type
    highlighted: boolean
    repository: string
    technologies: Technology[]
    frame?: React.ReactNode
}