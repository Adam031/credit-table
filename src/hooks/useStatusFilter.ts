import {useMemo, useState} from "react"
import {creditsMock} from "../mock-data/mock-data.ts"
import type {SetURLSearchParams} from "react-router-dom"

type Props = {
    sortKey: string | null
    sortOrder: string | null
    pageSize: number
    searchParams: URLSearchParams
    setSearchParams: SetURLSearchParams
}

export const useStatusFilter =
    ({sortKey, sortOrder, pageSize, searchParams, setSearchParams}: Props) => {

    const statusValues = ['new', 'active', 'paid']
    const statusFromUrl = searchParams.get("status")
    const [filteredStatusValues, setFilteredStatusValues] = useState<string[]>(
        statusFromUrl
            ? statusFromUrl.split(",")
            : []
    )

    const onStatusFiltering = (values: string[]) => {
        setFilteredStatusValues(values)

        setSearchParams({
            page: "1",
            pageSize: String(pageSize),
            ...(sortKey && sortOrder
                ? {
                    sortKey,
                    sortOrder,
                }
                : {}),
            ...(values.length
                ? { status: values.join(",") }
                : {})
        })
    }

    const filteredCredits = useMemo(() => {
        if (!filteredStatusValues.length) return creditsMock
        return creditsMock.filter(credit =>
            filteredStatusValues.includes(credit.status)
        )
    }, [filteredStatusValues])

    const resetStatusFilter = () => {
        setFilteredStatusValues([])

        setSearchParams({
            page: "1",
            pageSize: String(pageSize),
            ...(sortKey && sortOrder
                ? { sortKey, sortOrder }
                : {}),
        })
    }

    return {
        filteredStatusValues,
        filteredCredits,
        statusValues,
        onStatusFiltering,
        resetStatusFilter
    }
}