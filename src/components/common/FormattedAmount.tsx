import type { FC } from "react";

type Props = {
    amount: number
    currency?: string
};

export const FormattedAmount: FC<Props> = ({ amount, currency = "UAH" }) => {
    const formattedAmount = amount
        .toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
        .replace(/,/g, " ")

    return <>{formattedAmount} {currency}</>
};
