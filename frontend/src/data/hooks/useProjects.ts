"use client"
import {  Type } from "@core"
import { useMemo } from "react"
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
	const gameProjects = useMemo(
		() => projects?.filter((project) => project.type === Type.GAME) || [],
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
		gameProjects,
		mobileProjects,
	}
}
export function useProjectId(projectId: string) {
	return {
		project:
			projects.find((project) => project.id === Number(projectId)) || null,
	}
}
