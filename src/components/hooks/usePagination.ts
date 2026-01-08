import type {Credit} from "../../mock-data/types.ts"
import type {SetURLSearchParams} from "react-router-dom"
import {creditsTablePaginationMock} from "../../mock-data/mock-data.ts"
import {useEffect, useMemo} from "react"

type Props = {
    sortKey: string | null
    sortOrder: string | null
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

    const rawPage = Number(searchParams.get("page"))
    const receivedPage = Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1

    const totalItems = filteredCredits.length;
    const totalPages = Math.ceil(totalItems / pageSize)

    const page = Math.min(receivedPage, totalPages || 1)

    useEffect(() => {
        if (rawPage !== page) {
            setSearchParams({
                page: String(page),
                pageSize: String(pageSize),
                ...(sortKey && sortOrder ? { sortKey, sortOrder } : {}),
                ...(filteredStatusValues.length
                    ? { status: filteredStatusValues.join(",") }
                    : {}),
            })
        }
    }, [rawPage, page])

    const setPageAndUpdateUrl = (newPage: number) => {
        setSearchParams({
            page: String(newPage),
            pageSize: String(pageSize),
            ...(sortKey && sortOrder
                ? {
                    sortKey,
                    sortOrder,
                }
                : {}),
            status: filteredStatusValues.join(",")
        })
    }

    const setPageSizeAndUpdateUrl = (newSize: number) => {
        setSearchParams({
            page: "1",
            pageSize: String(newSize),
            ...(sortKey && sortOrder
                ? {
                    sortKey,
                    sortOrder,
                }
                : {}),
            status: filteredStatusValues.join(",")
        })
    }

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