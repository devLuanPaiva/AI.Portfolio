export interface Technology {
    id: number
    name: string
    description: string
    image: string
    highlighted: boolean
}

export interface TechnologiesProps {
	technologies: Technology[]
	smallerSize?: boolean
}
