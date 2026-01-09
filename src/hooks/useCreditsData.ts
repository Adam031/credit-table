import {useEffect, useState} from "react"
import {creditsMock} from "../mock-data/mock-data.ts"
import type {Credit} from "../mock-data/types.ts"

export const useCreditsData = () => {
    const [credits, setCredits] = useState<Credit[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        const timer = setTimeout(() => {
            setCredits(creditsMock)
            setIsLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
    }, [])

    return { credits, isLoading }
}
