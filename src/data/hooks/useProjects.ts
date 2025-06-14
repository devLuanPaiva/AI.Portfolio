"use client"
import { useMemo } from "react"
import { Type } from "../models/enums"
import { projects } from "../constants/projects.const"
export function useProjects() {
	const highlightedProjects = useMemo(
		() => projects?.filter((project) => project.highlighted) || [],
		[]
	)
	const webProjects = useMemo(
		() => projects?.filter((project) => project.type === Type.WEB) || [],
		[]
	)

	const mobileProjects = useMemo(
		() => projects?.filter((project) => project.type === Type.MOBILE) || [],
		[]
	)

	return {
		projects: projects || [],
		highlightedProjects,
		webProjects,
		mobileProjects,
	}
}
export function useProjectId(projectId: string) {
	return {
		project:
			projects.find((project) => project.id === Number(projectId)) || null,
	}
}
