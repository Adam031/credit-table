import type {Credit} from "../mock-data/types.ts"
import {useMemo} from "react"
import type {SetURLSearchParams} from "react-router-dom"

type Props = {
    sortKey: keyof Credit
    sortOrder: "asc" | "desc"
    pageSize: number
    filteredStatusValues: string[]
    filteredCredits: Credit[]
    setSearchParams: SetURLSearchParams
}

export const useSorting =
    ({sortKey, sortOrder, pageSize, filteredStatusValues, filteredCredits, setSearchParams}: Props) => {

    const setSort = (key: keyof Credit) => {
        const newOrder = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
        setSearchParams({
            page: "1",
            pageSize: String(pageSize),
            sortKey: key,
            sortOrder: newOrder,
            status: filteredStatusValues
        })
    }

    const sortedCredits = useMemo(() => {
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

    return {
        sortedCredits,
        setSort
    }
}