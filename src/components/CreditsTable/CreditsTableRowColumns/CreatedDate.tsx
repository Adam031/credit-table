import type {FC} from "react";

type Props = {
    date: string
}

export const CreatedDate:FC<Props> = ({date}) => {
    return (
        <div>
            <div>{date}</div>
        </div>
    )
}