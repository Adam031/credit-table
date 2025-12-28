import type {FC} from "react";
import type {CreditStatus} from "../../../mock-data/types.ts";

type Props = {
    status: CreditStatus
}

export const Status:FC<Props> = ({status} ) => {
    return (
        <div>
            <div>{status}</div>
        </div>
    )
}