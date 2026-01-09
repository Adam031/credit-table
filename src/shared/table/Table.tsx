import {TableHeader} from "./TableHeader.tsx"
import {TableRow} from "./TableRow.tsx"
import type {Credit} from "../../mock-data/types.ts"
import {EmptyTable} from "./EmptyTable.tsx"
import type {Column} from "../../features/credits/ui/columns/columns.tsx"

type Props = {
    rows: Credit[]
    columns: Column<Credit>[]
    setSort: (key: keyof Credit) => void
    sortKey: keyof Credit | null
    sortOrder: string | null
}

export const Table = ({rows, columns, setSort, sortKey, sortOrder}:Props) => {
    return (
        <table className="table-fixed w-full mt-5">
            <TableHeader columns={columns} setSort={setSort} sortKey={sortKey} sortOrder={sortOrder} />
            {!rows.length ? <EmptyTable /> :
                <tbody>
                {rows.map((row) => <TableRow key={row.id} row={row} columns={columns}/>)}
                </tbody>
            }
        </table>
    )
}