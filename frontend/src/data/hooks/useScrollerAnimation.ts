'use client'
import { useRef, useState, useEffect } from "react"

export function useScrollerAnimation() {
	const containerRef = useRef<HTMLDivElement>(null)
	const scrollerRef = useRef<HTMLUListElement>(null)
	const [start, setStart] = useState(false)

	useEffect(() => {
		addAnimation()
	}, [])

	function addAnimation() {
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
	}

	function getDirection() {
		if (containerRef.current) {
			containerRef.current.style.setProperty(
				"--animation-direction",
				"forwards"
			)
		}
	}

	function getSpeed() {
		if (containerRef.current) {
			containerRef.current.style.setProperty("--animation-duration", "80s")
		}
	}

	return { containerRef, scrollerRef, start }
}
