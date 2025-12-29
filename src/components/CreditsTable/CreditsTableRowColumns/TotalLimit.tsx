import type {FC} from "react";
import {FormattedAmount} from "../../common/FormattedAmount.tsx"

type Props = {
    amount: number
}

export const TotalLimit:FC<Props> = ({amount}) => {
    return (
        <div>
            <b><FormattedAmount amount={amount} /></b>
        </div>
    )
}