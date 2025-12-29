import type {FC} from "react";
import type {CreditStatus} from "../../../mock-data/types.ts";

type Props = {
    status: CreditStatus
}

const statusColors = {
    active: "bg-blue-500",
    new: "bg-orange-500",
    paid: "bg-green-500",
}

export const Status:FC<Props> = ({status} ) => {
    const statusColor = statusColors[status]

    return (
        <div>
            <div className={`${statusColor} rounded-2xl text-center text-white`}>{status}</div>
        </div>
    )
}