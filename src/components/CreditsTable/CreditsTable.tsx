import {creditsMock, creditsTablePaginationMock} from "../../mock-data/mock-data.ts";
import {useMemo, useState} from "react";
import {Pagination} from "../Pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";
import type {Credit} from "../../mock-data/types.ts"
import {creditsColumns} from "./columns.tsx"
import {Preloader} from "../Preloader/Preloader.tsx"
import {StatusFilter} from "../Filters/StatusFilter.tsx"
import {ColumnsVisibility} from "../Filters/ColumnsVisibility.tsx"
import {CreditsTableView} from "./CreditsTableView.tsx"
import {useColumnVisibility} from "../hooks/useColumnVisibility.ts"

export const CreditsTable = () => {
    if (!creditsMock.length) return <Preloader />

    const [searchParams, setSearchParams] = useSearchParams()

    const { visibleColumns, setVisibleColumns, reset: resetColumnsVisibility } =
        useColumnVisibility(creditsColumns.map(c => c.key))

    // status filter
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

    //sorting
    const sortKey = searchParams.get("sortKey") as keyof Credit || "id"
    const sortOrder = (searchParams.get("sortOrder") as "asc" | "desc") || "asc"

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

    //pagination
    const pageSizeVariants = creditsTablePaginationMock.pageSizeVariants

    const page = Number(searchParams.get("page") || "1")
    const pageSize = Number(searchParams.get("pageSize") || String(creditsTablePaginationMock.pageSize))

    const totalItems = filteredCredits.length;
    const totalPages = Math.ceil(totalItems / pageSize)

    const setPageAndUpdateUrl = (newPage: number) => {
        setSearchParams({page: String(newPage), pageSize: String(pageSize), sortKey, sortOrder})
    };

    const setPageSizeAndUpdateUrl = (newSize: number) => {
        setSearchParams({page: "1", pageSize: String(newSize), sortKey, sortOrder})
    };

    const paginatedCredits = useMemo(() => {
        const start = (page - 1) * pageSize
        const end = start + pageSize
        return sortedCredits.slice(start, end)
    }, [page, pageSize, sortedCredits])

    return (
        <>
            <div className="flex justify-between w-full pl-4">
                <StatusFilter
                    filteredStatusValues={filteredStatusValues}
                    statusValues={statusValues}
                    onStatusFiltering={onStatusFiltering}
                    resetStatusFilter={resetStatusFilter}
                />

                <ColumnsVisibility
                    visibleColumns={visibleColumns}
                    setVisibleColumns={setVisibleColumns}
                    resetColumnsVisibility={resetColumnsVisibility}
                />
            </div>

            <CreditsTableView
                paginatedCredits={paginatedCredits}
                setSort={setSort}
                sortKey={sortKey}
                sortOrder={sortOrder}
                visibleColumns={visibleColumns}
            />

            <Pagination
                page={page}
                pageSize={pageSize}
                totalPages={totalPages}
                totalItems={totalItems}
                pageSizeVariants={pageSizeVariants}
                setPage={setPageAndUpdateUrl}
                setPageSize={setPageSizeAndUpdateUrl}
            />
        </>
    )
}