import type {Credit} from "../../mock-data/types.ts"
import type {SetURLSearchParams} from "react-router-dom"
import {creditsTablePaginationMock} from "../../mock-data/mock-data.ts"
import {useMemo} from "react"

type Props = {
    sortKey: string
    sortOrder: string
    pageSize: number
    filteredCredits: Credit[]
    filteredStatusValues: string[]
    sortedCredits: Credit[]
    searchParams: URLSearchParams
    setSearchParams: SetURLSearchParams
}

export const usePagination =
    ({sortKey, sortOrder, pageSize, filteredStatusValues, filteredCredits, sortedCredits, searchParams, setSearchParams}: Props) => {

    const pageSizeVariants = creditsTablePaginationMock.pageSizeVariants

    const page = Number(searchParams.get("page") || "1")

    const totalItems = filteredCredits.length;
    const totalPages = Math.ceil(totalItems / pageSize)

    const setPageAndUpdateUrl = (newPage: number) => {
        setSearchParams({
            page: String(newPage),
            pageSize: String(pageSize),
            sortKey,
            sortOrder,
            status: filteredStatusValues.join(",")
        })
    };

    const setPageSizeAndUpdateUrl = (newSize: number) => {
        setSearchParams({page: "1", pageSize: String(newSize), sortKey, sortOrder, status: filteredStatusValues})
    };

    const paginatedCredits = useMemo(() => {
        const start = (page - 1) * pageSize
        const end = start + pageSize
        return sortedCredits.slice(start, end)
    }, [page, pageSize, sortedCredits])

    return {
        page,
        totalItems,
        totalPages,
        pageSizeVariants,
        paginatedCredits,
        setPageAndUpdateUrl,
        setPageSizeAndUpdateUrl
    }
}