import {type Column} from "../../features/credits/ui/columns/columns.tsx";
import type {Credit} from "../../mock-data/types.ts"
import {Preloader} from "../ui/Preloader/Preloader.tsx"

type Props = {
    columns: Column<Credit>[]
    setSort: (key: keyof Credit) => void
    sortKey: keyof Credit | null
    sortOrder: string | null
}

export const TableHeader = ({columns, setSort, sortKey, sortOrder } : Props) => {
    if (!columns.length) return <Preloader />

    return (
        <thead className="border-t border-b border-gray-300">
            <tr>
                {columns.map((column) => (
                    <th key={column.key}
                        className="py-3 px-4 text-[15px] text-left border-r text-gray-700 font-medium border-gray-200"
                        onClick={() => column.sortable && setSort(column.sortKey!)}
                    >
                        <div className="flex items-center cursor-pointer">
                            {column.title}
                            {column.sortable && (
                                <span className="ml-auto">
                                    {sortKey === column.sortKey ?
                                        sortOrder === "asc" ?
                                            <span className="text-2xl text-black">↑</span>
                                        : sortOrder === "desc" ?
                                            <span className="text-2xl text-black">↓</span>
                                        :
                                            <span className="text-2xl text-gray-400">↕</span>
                                    :
                                        <span className="text-2xl text-gray-500">↕</span>
                                    }
                                </span>
                            )}
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    )
}