import {CreditsTableHeader} from "./CreditsTableHeader.tsx"
import {CreditsTableRow} from "./CreditsTableRow.tsx"
import type {Credit} from "../../mock-data/types.ts"
import {EmptyTable} from "./EmptyTable.tsx"

type Props = {
    paginatedCredits: Credit[]
    setSort: (key: keyof Credit) => void
    sortKey: keyof Credit | null
    sortOrder: string
    visibleColumns: string[]
}

export const CreditsTableView = ({paginatedCredits, setSort, sortKey, sortOrder, visibleColumns}:Props) => {
    return (
        <table className="table-fixed w-full mt-5">
            <CreditsTableHeader setSort={setSort} sortKey={sortKey} sortOrder={sortOrder} visibleColumns={visibleColumns} />
            {!paginatedCredits.length ? <EmptyTable /> :
                <tbody>
                {paginatedCredits.map((credit) => <CreditsTableRow key={credit.id} credit={credit} visibleColumns={visibleColumns}/>)}
                </tbody>
            }
        </table>
    )
}