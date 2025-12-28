import type {Credit} from "../../mock-data/types.ts";
import {creditsColumns} from "./columns.tsx";
import type {FC} from "react";

type Props = {
    credit: Credit
}

export const CreditsTableRow:FC<Props> = ({ credit }) => {
    return (
        <tr className="even:bg-gray-200 odd:bg-white hover:bg-gray-400 transition duration-200">
            {creditsColumns.map((column) => (
                <td key={column.key} className="py-2 px-4 text-[15px] text-gray-700 font-medium border-gray-400">
                    {column.render(credit)}
                </td>
            ))}
        </tr>
    )
}
