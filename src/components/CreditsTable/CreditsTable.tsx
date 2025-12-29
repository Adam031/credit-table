import {CreditsTableHeader} from "./CreditsTableHeader.tsx";
import {CreditsTableRow} from "./CreditsTableRow.tsx";
import {creditsMock, creditsTablePaginationMock} from "../../mock-data/mock-data.ts";
import {useEffect, useMemo, useState} from "react";
import {Pagination} from "../Pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";
import type {Credit} from "../../mock-data/types.ts"
import {creditsColumns} from "./columns.tsx"
import {Checkbox, ListItemText, MenuItem, Select} from "@mui/material"
import resetIcon from '../../assets/reset.svg'

export const CreditsTable = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    //columns visibility
    const visibleColumnsKeys = creditsColumns.map(column => column.key)

    const [visibleColumns, setVisibleColumns] = useState<string[]>(() => {
        const saved = localStorage.getItem("visibleColumns")
        return saved ? JSON.parse(saved) : visibleColumnsKeys
    })

    useEffect(() => {
        localStorage.setItem("visibleColumns", JSON.stringify(visibleColumns))
    }, [visibleColumns])

    const onSelectChange = (e:any) => {
        const value = typeof e.target.value === "string"
            ? e.target.value.split(",")
            : e.target.value

        setVisibleColumns(value)
    }

    const resetColumnsVisibility = () => {
        setVisibleColumns(visibleColumnsKeys)
    }

    //sorting
    const urlSortKey = searchParams.get("sortKey") as keyof Credit | null
    const urlSortOrder = searchParams.get("sortOrder") || "asc"

    const defaultSortKey: keyof Credit = "id"
    const defaultSortOrder: "asc" | "desc" = "asc"

    const sortKey = urlSortKey || defaultSortKey
    const sortOrder = urlSortKey ? urlSortOrder : defaultSortOrder

    const setSort = (key: keyof Credit) => {
        const newOrder = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
        setSearchParams({
            page: "1",
            pageSize: String(pageSize),
            sortKey: key,
            sortOrder: newOrder
        })
    }

    const sortedCredits = useMemo(() => {
        if (!sortKey) return creditsMock

        return [...creditsMock].sort((a, b) => {
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
    }, [sortKey, sortOrder])

    //pagination
    const pageSizeVariants = creditsTablePaginationMock.pageSizeVariants

    const page = Number(searchParams.get("page") || "1")
    const pageSize = Number(searchParams.get("pageSize") || String(creditsTablePaginationMock.pageSize))

    const totalItems = creditsMock.length;
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
            <div className="flex justify-end w-full px-4">
                <img src={resetIcon} width={20} height={20} alt="reset icon" className="cursor-pointer" onClick={resetColumnsVisibility} />
                <Select
                    multiple
                    className="w-10 h-5 overflow-hidden ml-3"
                    value={visibleColumns}
                    onChange={(e) => onSelectChange(e)}
                    renderValue={() => ''}
                >
                    {creditsColumns.map((column) => (
                        <MenuItem key={column.key} value={column.key}>
                            <Checkbox checked={visibleColumns.includes(column.key)} />
                            <ListItemText primary={column.key} />
                        </MenuItem>
                    ))}
                </Select>
            </div>

            <table className="table-fixed w-full mt-5">
                <CreditsTableHeader setSort={setSort} sortKey={sortKey} sortOrder={sortOrder} visibleColumns={visibleColumns} />
                <tbody>
                {paginatedCredits.map((credit) => <CreditsTableRow key={credit.id} credit={credit} visibleColumns={visibleColumns}/>)}
                </tbody>
            </table>

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