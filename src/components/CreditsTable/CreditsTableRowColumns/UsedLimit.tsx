import type {FC} from "react";
import {FormattedAmount} from "../../common/FormattedAmount.tsx"

type Props = {
    amount: number
}

export const UsedLimit:FC<Props> = ({amount}) => {
    return (
        <div>
            <b><FormattedAmount amount={amount} /></b>
        </div>
    )
}