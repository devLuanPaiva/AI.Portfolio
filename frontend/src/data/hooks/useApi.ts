"use client"
import { useEffect, useState } from "react"
import { ajax } from "rxjs/ajax"
import { catchError, of } from "rxjs"

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export function useApi<T>(endpoint: string) {
	const [data, setData] = useState<T | null>(null)
	const [loading, setLoading] = useState<boolean>(false)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		if (!BASE_URL || !endpoint) return

		const fullUrl = `${BASE_URL}${endpoint}`
		setLoading(true)

		const subscription = ajax
			.getJSON<T>(fullUrl)
			.pipe(
				catchError((err) => {
					setError(err.message)
					setLoading(false)
					return of(null)
				})
			)
			.subscribe((response) => {
				setData(response)
				setLoading(false)
			})

		return () => subscription.unsubscribe()
	}, [endpoint])

	return { data, loading, error }
}
