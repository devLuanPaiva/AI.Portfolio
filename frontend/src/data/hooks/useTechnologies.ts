"use client"
import { technologies } from '@/data/constants/technologies.const'
import { useMemo } from "react"

export function useTechnologies() {

	const highlightedTechnologies = useMemo(
		() => technologies?.filter((tech) => tech.highlighted) || [],
		[]
	)

	return { technologies, highlightedTechnologies }
}
