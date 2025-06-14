'use client'
import { useRef, useState, useEffect, useCallback } from "react"

export function useScrollerAnimation() {
	const containerRef = useRef<HTMLDivElement>(null)
	const scrollerRef = useRef<HTMLUListElement>(null)
	const [start, setStart] = useState(false)

	const getDirection = useCallback(() => {
		if (containerRef.current) {
			containerRef.current.style.setProperty("--animation-direction", "forwards")
		}
	}, [])

	const getSpeed = useCallback(() => {
		if (containerRef.current) {
			containerRef.current.style.setProperty("--animation-duration", "80s")
		}
	}, [])

	const addAnimation = useCallback(() => {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children)

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true)
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem)
				}
			})

			getDirection()
			getSpeed()
			setStart(true)
		}
	}, [getDirection, getSpeed])

	useEffect(() => {
		addAnimation()
	}, [addAnimation])

	return { containerRef, scrollerRef, start }
}
