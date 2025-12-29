import {creditsColumns} from "./columns.tsx";
import type {Credit} from "../../mock-data/types.ts"
import {Preloader} from "../Preloader/Preloader.tsx"

type Props = {
    setSort: (key: keyof Credit) => void
    sortKey: keyof Credit | null
    sortOrder: string
    visibleColumns: string[]
}

export const CreditsTableHeader = ({ setSort, sortKey, sortOrder, visibleColumns } : Props) => {
    if (!creditsColumns.length) return <Preloader />

    return (
        <thead className="border-t border-b border-gray-300">
            <tr>
                {creditsColumns
                    .filter(column => visibleColumns.includes(column.key))
                    .map((column) => (
                    <th key={column.key}
                        className="py-3 px-4 text-[15px] text-left border-r text-gray-700 font-medium border-gray-200"
                        onClick={() => column.sortable && setSort(column.sortKey!)}
                    >
                        <div className="flex items-center cursor-pointer">
                            {column.title}
                            {column.sortable && (
                                <span className="ml-auto">
                                    {sortKey === column.sortKey
                                        ? sortOrder === "asc"
                                            ? <span className="text-2xl text-black">↑</span>
                                            : <span className="text-2xl text-black">↓</span>
                                        : <span className="text-2xl text-gray-500">↑</span>}
                                </span>
                            )}
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    )
}