import {useMemo, useState} from "react"
import {creditsMock} from "../mock-data/mock-data.ts"
import type {SetURLSearchParams} from "react-router-dom"

type Props = {
    sortKey: string
    sortOrder: string
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
            : statusValues
    )

    const onStatusFiltering = (values: string[]) => {
        setFilteredStatusValues(values)

        setSearchParams({
            page: "1",
            pageSize: String(pageSize),
            sortKey,
            sortOrder,
            status: values.join(","),
        })
    }

    const filteredCredits = useMemo(() => {
        return creditsMock.filter(credit =>
            filteredStatusValues.includes(credit.status)
        )
    }, [filteredStatusValues])

    const resetStatusFilter = () => {
        setFilteredStatusValues(statusValues)
    }

    return {
        filteredStatusValues,
        filteredCredits,
        statusValues,
        onStatusFiltering,
        resetStatusFilter
    }
}