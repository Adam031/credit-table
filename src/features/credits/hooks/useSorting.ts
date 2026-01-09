import type {Credit} from "../../../mock-data/types.ts"
import {useMemo} from "react"
import type {SetURLSearchParams} from "react-router-dom"

type Props = {
    sortKey: keyof Credit | null
    sortOrder: "asc" | "desc" | null
    pageSize: number
    filteredStatusValues: string[]
    filteredCredits: Credit[]
    setSearchParams: SetURLSearchParams
}

export const useSorting =
    ({sortKey, sortOrder, pageSize, filteredStatusValues, filteredCredits, setSearchParams}: Props) => {

        const setSort = (key: keyof Credit) => {
            let nextKey: keyof Credit | null = key
            let nextOrder: "asc" | "desc" | null = "asc"

            if (sortKey !== key) {
                nextOrder = "asc"
            } else {
                if (sortOrder === "asc") nextOrder = "desc"
                else if (sortOrder === "desc") {
                    nextOrder = null
                    nextKey = null
                } else {
                    nextOrder = "asc"
                }
            }

            setSearchParams({
                page: "1",
                pageSize: String(pageSize),
                ...(nextKey && nextOrder
                    ? {
                        sortKey: nextKey,
                        sortOrder: nextOrder,
                    }
                    : {}),
                ...(filteredStatusValues.length
                    ? { status: filteredStatusValues.join(",") }
                    : {})
            })
        }

    const sortedCredits = useMemo(() => {
        if (!sortKey || !sortOrder) {
            return filteredCredits
        }

        return [...filteredCredits].sort((a, b) => {
            let aValue = a[sortKey]
            let bValue = b[sortKey]

            if (sortKey === "createdDate") {
                aValue = new Date(aValue as string).getTime()
                bValue = new Date(bValue as string).getTime()
            }

            if (aValue < bValue) return sortOrder === "asc" ? -1 : 1
            if (aValue > bValue) return sortOrder === "asc" ? 1 : -1
            return 0
        })
    }, [filteredCredits, sortKey, sortOrder])


    const resetSorting = () => {
        setSearchParams({
            page: "1",
            pageSize: String(pageSize),
            ...(filteredStatusValues.length
                ? { status: filteredStatusValues.join(",") }
                : {})
        })
    }

    return {
        sortedCredits,
        setSort,
        resetSorting
    }
}