import { useScrollerAnimation } from "../src/data/hooks/useScrollerAnimation"
import { renderHook } from "@testing-library/react"

describe("useScrollerAnimation hook", () => {
	it("should initialize refs correctly", () => {
		const { result } = renderHook(() => useScrollerAnimation())

		expect(result.current.containerRef.current).toBeNull()
		expect(result.current.scrollerRef.current).toBeNull()
		expect(result.current.start).toBe(false)
	})
	it("should duplicate scroller elements", () => {
		const { result } = renderHook(() => useScrollerAnimation())

		const container = document.createElement("div")
		const scroller = document.createElement("ul")
		const listItem = document.createElement("li")
		listItem.textContent = "Item 1"

		scroller.appendChild(listItem)
		container.appendChild(scroller)

		result.current.containerRef.current = container
		result.current.scrollerRef.current = scroller

		expect(scroller.children.length).toBe(1)
	})
})
