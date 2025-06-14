"use client"
import { useMemo } from "react"
import { technologies } from '@/data/constants/technologies.const'

export function useTechnologies() {

	const highlightedTechnologies = useMemo(
		() => technologies?.filter((tech) => tech.highlighted) || [],
		[]
	)

	return { technologies, highlightedTechnologies }
}
