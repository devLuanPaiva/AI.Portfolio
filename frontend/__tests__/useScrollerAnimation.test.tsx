import { useScrollerAnimation } from "../src/data/hooks/useScrollerAnimation"
import { renderHook } from "@testing-library/react"

describe("useScrollerAnimation hook", () => {
	it("should initialize refs correctly", () => {
		const { result } = renderHook(() => useScrollerAnimation())

		expect(result.current.containerRef.current).toBeNull()
		expect(result.current.scrollerRef.current).toBeNull()
		expect(result.current.start).toBe(false)
	})
})
