"use client"
import { useEffect, useState } from "react"

export default function useSessionStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
        const localValue = sessionStorage.getItem(key)
        return localValue ? JSON.parse(localValue) : initialValue
    })

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue] as const
}