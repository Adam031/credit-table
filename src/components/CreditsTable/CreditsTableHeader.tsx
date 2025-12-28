import {creditsColumns} from "./columns.tsx";

export const CreditsTableHeader = () => {
    return (
        <thead className="border-t border-b border-gray-300">
            <tr>
                {creditsColumns.map((column) => (
                    <th key={column.key} className="py-3 px-4 text-[15px] text-left border-r text-gray-700 font-medium border-gray-200 ">
                        {column.title}
                    </th>
                ))}
            </tr>
        </thead>
    )
}