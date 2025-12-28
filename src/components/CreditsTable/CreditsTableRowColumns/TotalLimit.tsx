import type {FC} from "react";

type Props = {
    amount: number
}

export const TotalLimit:FC<Props> = ({amount}) => {
    return (
        <div>
            <div>{amount}</div>
        </div>
    )
}