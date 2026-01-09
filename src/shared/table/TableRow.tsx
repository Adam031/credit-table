import type {Credit} from "../../mock-data/types.ts";
import {type Column} from "../../features/credits/ui/columns/columns.tsx";
import type {FC} from "react";

type Props = {
    row: Credit
    columns: Column<Credit>[]
}

export const TableRow:FC<Props> = ({ row, columns }) => {
    return (
        <tr className="even:bg-gray-200 odd:bg-white hover:bg-gray-400 transition duration-200">
            {columns.map((column) => (
                <td key={column.key} className="py-2 px-4 text-[15px] text-gray-700 font-medium border-gray-400">
                    {column.render(row)}
                </td>
            ))}
        </tr>
    )
}
