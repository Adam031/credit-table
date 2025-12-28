import type {FC} from "react";

type Props = {
    amount: number
}

export const UsedLimit:FC<Props> = ({amount}) => {
    return (
        <div>
            <div>{amount}</div>
        </div>
    )
}