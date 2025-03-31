import { renderHook, act } from "@testing-library/react"
import useSessionStorage from "@/data/hooks/useSessionStorage"

describe("useSessionStorage hook", () => {
    beforeEach(() => {
        sessionStorage.clear()
    })

    it("should return the initial value when there is no data in sessionStorage", () => {
        const { result } = renderHook(() => useSessionStorage("testKey", "defaultValue"))
        expect(result.current[0]).toBe("defaultValue")
    })
    it("must retrieve the value stored in sessionStorage", () => {
        sessionStorage.setItem("testKey", JSON.stringify("storedValue"))
        const { result } = renderHook(() => useSessionStorage("testKey", "defaultValue"))
        expect(result.current[0]).toBe("storedValue")
    })
    it("should update the value in state and sessionStorage", () => {
        const { result } = renderHook(() => useSessionStorage("testKey", "defaultValue"))

        act(() => {
            result.current[1]("newValue")
        })

        expect(result.current[0]).toBe("newValue")
        expect(JSON.parse(sessionStorage.getItem("testKey")!)).toBe("newValue")
    })
})