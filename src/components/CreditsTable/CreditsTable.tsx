import {CreditsTableHeader} from "./CreditsTableHeader.tsx";
import {CreditsTableRow} from "./CreditsTableRow.tsx";
import {creditsMock, creditsTablePaginationMock} from "../../mock-data/mock-data.ts";
import {useMemo} from "react";
import {Pagination} from "../Pagination/Pagination.tsx";
import {useSearchParams} from "react-router-dom";

export const CreditsTable = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const pageSizeVariants = creditsTablePaginationMock.pageSizeVariants

    const page = Number(searchParams.get("page") || "1")
    const pageSize = Number(searchParams.get("pageSize") || String(creditsTablePaginationMock.pageSize))

    const totalItems = creditsMock.length;
    const totalPages = Math.ceil(totalItems / pageSize)

    const setPageAndUpdateUrl = (newPage: number) => {
        setSearchParams({page: String(newPage), pageSize: String(pageSize)})
    };

    const setPageSizeAndUpdateUrl = (newSize: number) => {
        setSearchParams({page: "1", pageSize: String(newSize)})
    };

    const paginatedCredits = useMemo(() => {
        const start = (page - 1) * pageSize
        const end = start + pageSize
        return creditsMock.slice(start, end)
    }, [page, pageSize])

    return (
        <>
            <table className="table-fixed w-full mt-5">
                <CreditsTableHeader/>
                <tbody>
                {paginatedCredits.map((credit) => <CreditsTableRow key={credit.id} credit={credit}/>)}
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