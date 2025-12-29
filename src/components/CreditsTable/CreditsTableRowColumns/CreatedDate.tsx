import type {FC} from "react";

type Props = {
    date: string
}

export const CreatedDate:FC<Props> = ({date}) => {
    const formattedDate = new Date(date);

    return (
        <div>
            <div>{formattedDate.toLocaleString("uk-UA").replace(",", "")}</div>
        </div>
    )
}