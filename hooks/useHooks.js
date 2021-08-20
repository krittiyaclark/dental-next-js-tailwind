// hooks/useSingleNavigation.js

import { useEffect, useState } from 'react'

export default function useHooks(props) {
	// Initially state will be loading.
	const [isLoading, toggleIsLoading] = useState(true)
	const [errors, setErrors] = useState()
	const [data, setData] = useState()

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(`/api/${props}`)
				const data = await res.json()
				setData(data)
			} catch (error) {
				setErrors(error)
			} finally {
				toggleIsLoading(false)
			}
		}

		fetchData()
	}, [props])

	return {
		isLoading,
		errors,
		data,
	}
}
