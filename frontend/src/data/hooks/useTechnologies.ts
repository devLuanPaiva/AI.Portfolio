"use client"
import { Technology } from "@core"
import { useApi } from "./useApi"
import { useMemo } from "react"

export function useTechnologies() {
	const { data, loading, error } = useApi<Technology[]>("/technology")

	const highlightedTechnologies = useMemo(
		() => data?.filter((tech) => tech.highlighted) || [],
		[data]
	)

	return { technologies: data || [], highlightedTechnologies, loading, error }
}
