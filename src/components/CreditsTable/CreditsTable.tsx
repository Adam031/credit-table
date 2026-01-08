import {creditsMock, creditsTablePaginationMock} from "../../mock-data/mock-data.ts";
import {Pagination} from "../Pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";
import type {Credit} from "../../mock-data/types.ts"
import {creditsColumns} from "./columns.tsx"
import {Preloader} from "../Preloader/Preloader.tsx"
import {StatusFilter} from "../Filters/StatusFilter.tsx"
import {ColumnsVisibility} from "../Filters/ColumnsVisibility.tsx"
import {CreditsTableView} from "./CreditsTableView.tsx"
import {useColumnVisibility} from "../../hooks/useColumnVisibility.ts"
import {useStatusFilter} from "../../hooks/useStatusFilter.ts"
import {useSorting} from "../../hooks/useSorting.ts"
import {usePagination} from "../hooks/usePagination.ts"

export const CreditsTable = () => {
    if (!creditsMock.length) return <Preloader/>

    const [searchParams, setSearchParams] = useSearchParams()

    const sortKey = searchParams.get("sortKey") as keyof Credit | null
    const sortOrder = searchParams.get("sortOrder") as "asc" | "desc" | null
    const pageSize = Number(searchParams.get("pageSize") || creditsTablePaginationMock.pageSize)

    const {visibleColumns, setVisibleColumns, reset: resetColumnsVisibility} =
        useColumnVisibility(creditsColumns.map(c => c.key))

    const {
        filteredStatusValues,
        filteredCredits,
        statusValues,
        onStatusFiltering,
        resetStatusFilter
    } = useStatusFilter({sortKey, sortOrder, pageSize, searchParams, setSearchParams})

    const {sortedCredits, setSort, resetSorting} =
        useSorting({sortKey, sortOrder, pageSize, filteredStatusValues, filteredCredits, setSearchParams})

    const {
        page,
        totalItems,
        totalPages,
        pageSizeVariants,
        paginatedCredits,
        setPageAndUpdateUrl,
        setPageSizeAndUpdateUrl
    } = usePagination({sortKey, sortOrder, pageSize, filteredStatusValues, filteredCredits, sortedCredits, searchParams, setSearchParams})

    const resetAllFilters = () => {
        resetColumnsVisibility()
        resetStatusFilter()
        resetSorting()
    }

    return (
        <>
            <div className="flex justify-between w-full pl-4">
                <StatusFilter
                    filteredStatusValues={filteredStatusValues}
                    statusValues={statusValues}
                    onStatusFiltering={onStatusFiltering}
                />

                <ColumnsVisibility
                    visibleColumns={visibleColumns}
                    setVisibleColumns={setVisibleColumns}
                    resetAllFilters={resetAllFilters}
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