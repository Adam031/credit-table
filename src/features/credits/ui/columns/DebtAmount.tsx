import type {FC} from "react";
import {FormattedAmount} from "../../../../shared/FormattedAmount.tsx"

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