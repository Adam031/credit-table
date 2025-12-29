import type {FC} from "react";
import {FormattedAmount} from "../../common/FormattedAmount.tsx"

type Props = {
    amount: number
}

export const DebtAmount:FC<Props> = ({amount}) => {
    return (
        <div>
            <FormattedAmount amount={amount} currency={''} />
        </div>
    )
}