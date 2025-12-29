import type {ReactNode} from 'react'
import type {Credit} from "../../mock-data/types.ts";
import {Client} from "./CreditsTableRowColumns/Client.tsx";
import {CreatedDate} from "./CreditsTableRowColumns/CreatedDate.tsx";
import {TotalLimit} from "./CreditsTableRowColumns/TotalLimit.tsx";
import {UsedLimit} from "./CreditsTableRowColumns/UsedLimit.tsx";
import {Penalty} from "./CreditsTableRowColumns/Penalty.tsx";
import {DebtAmount} from "./CreditsTableRowColumns/DebtAmount.tsx";
import {Status} from "./CreditsTableRowColumns/Status.tsx";

export type Column<T> = {
    key: string
    title: string
    render: (row: T) => ReactNode
    sortable?: boolean
    sortKey?: keyof T
}

export const creditsColumns: Column<Credit>[] = [
    {
        key: 'id',
        title: 'ID',
        render: (credit) => credit.id,
        sortable: true,
        sortKey: 'id'
    },
    {
        key: 'client',
        title: 'Клієнт',
        render: (credit) => <Client client={credit.client} />,
    },
    {
        key: 'createdDate',
        title: 'Дата створення',
        render: (credit) => <CreatedDate date={credit.createdDate} />,
        sortable: true,
        sortKey: 'createdDate'
    },
    {
        key: 'totalLimit',
        title: 'Усього ліміт',
        render: (credit) => <TotalLimit amount={credit.totalLimit} />,
        sortable: true,
        sortKey: 'totalLimit'
    },
    {
        key: 'usedLimit',
        title: 'Використанний ліміт',
        render: (credit) => <UsedLimit amount={credit.usedLimit} />,
    },
    {
        key: 'penalty',
        title: 'Штраф',
        render: (credit) => <Penalty amount={credit.penalty} />,
    },
    {
        key: 'debtAmount',
        title: 'Сума заборгованості',
        render: (credit) => <DebtAmount amount={credit.penalty} />,
    },
    {
        key: 'status',
        title: 'Статус',
        render: (credit) => <Status status={credit.status} />,
        sortable: true,
        sortKey: 'status'
    },
]
