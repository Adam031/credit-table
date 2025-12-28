import type {Credit} from './types'

export const creditsMock: Credit[] = [
    {
        id: 4378,
        client: {
            phone: '+38063****555',
            fullName: 'Надія Дія',
        },
        createdDate: '2025-11-07T16:05:35',
        totalLimit: 10000,
        usedLimit: 0,
        penalty: 0,
        debtAmount: 0,
        status: 'new',
    },
    {
        id: 4348,
        client: {
            phone: '+38063****898',
            fullName: 'Діма Дія',
        },
        createdDate: '2025-11-06T16:35:18',
        totalLimit: 10000,
        usedLimit: 51,
        penalty: 0,
        debtAmount: 0,
        status: 'paid',
    },
    {
        id: 4321,
        client: {
            phone: '+38063****566',
            fullName: 'Вiтя Дія',
        },
        createdDate: '2025-11-05T12:55:02',
        totalLimit: 10000,
        usedLimit: 0,
        penalty: 0,
        debtAmount: 0,
        status: 'active',
    },
    {
        id: 4303,
        client: {
            phone: '+38063****574',
            fullName: 'Коля Дія',
        },
        createdDate: '2025-11-04T10:15:33',
        totalLimit: 10000,
        usedLimit: 0,
        penalty: 0,
        debtAmount: 0,
        status: 'new',
    },
]
