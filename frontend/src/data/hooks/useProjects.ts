"use client"
import { Project, Type } from "@core"
import { useApi } from "./useApi"
import { useMemo } from "react"

export function useProjects() {
	const { data, loading, error } = useApi<Project[]>("/project")

	const highlightedProjects = useMemo(
		() => data?.filter((project) => project.highlighted) || [],
		[data]
	)
	const webProjects = useMemo(
		() => data?.filter((project) => project.type === Type.WEB) || [],
		[data]
	)
	const gameProjects = useMemo(
		() => data?.filter((project) => project.type === Type.GAME) || [],
		[data]
	)
	const mobileProjects = useMemo(
		() => data?.filter((project) => project.type === Type.MOBILE) || [],
		[data]
	)

	return {
		projects: data || [],
		highlightedProjects,
		webProjects,
		gameProjects,
		mobileProjects,
		loading,
		error,
	}
}
export function useProjectId(projectId: string) {
	const { data, loading, error } = useApi<Project>(`/project/${projectId}`)
	return {
		project: data || null,
		loading,
		error,
	}
}
