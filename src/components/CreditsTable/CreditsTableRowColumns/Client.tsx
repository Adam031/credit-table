import type {FC} from "react"
import type {ClientType} from "../../../mock-data/types.ts"

type Props = {
    client: ClientType
}

export const Client:FC<Props> = ({client}) => {
    return (
        <div>
            <div>{client.phone}</div>
            <div>{client.fullName}</div>
        </div>
    )
}