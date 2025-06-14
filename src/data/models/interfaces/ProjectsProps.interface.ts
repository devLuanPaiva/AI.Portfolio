import { Level, Type } from "../enums"
import { Technology } from "./TechnologiesProps.interface"
export interface Project {
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

export interface ProjectsProps {
	projects: Project[]
	title: string
}
export interface ProjectProps {
	project: Project
}
