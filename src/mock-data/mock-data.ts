import type {Credit, PaginationMeta} from "./types";

export const creditsMock: Credit[] = [
    {
        id: 4378,
        client: { phone: "+38063****555", fullName: "Надія Дія" },
        createdDate: "2025-11-07T16:05:35",
        totalLimit: 10000,
        usedLimit: 0,
        penalty: 0,
        debtAmount: 0,
        status: "new",
    },
    {
        id: 4377,
        client: { phone: "+38063****111", fullName: "Олег Дія" },
        createdDate: "2025-11-07T15:45:10",
        totalLimit: 12000,
        usedLimit: 500,
        penalty: 0,
        debtAmount: 500,
        status: "active",
    },
    {
        id: 4376,
        client: { phone: "+38063****222", fullName: "Ірина Дія" },
        createdDate: "2025-11-07T14:30:55",
        totalLimit: 8000,
        usedLimit: 8000,
        penalty: 200,
        debtAmount: 8200,
        status: "paid",
    },
    {
        id: 4375,
        client: { phone: "+38063****333", fullName: "Максим Дія" },
        createdDate: "2025-11-07T13:10:42",
        totalLimit: 15000,
        usedLimit: 3000,
        penalty: 0,
        debtAmount: 3000,
        status: "active",
    },
    {
        id: 4374,
        client: { phone: "+38063****444", fullName: "Анна Дія" },
        createdDate: "2025-11-07T12:05:12",
        totalLimit: 5000,
        usedLimit: 0,
        penalty: 0,
        debtAmount: 0,
        status: "new",
    },

    ...Array.from({ length: 35 }).map((_, index): Credit => {
        const id = 4373 - index
        const statuses: Credit["status"][] = ["new", "active", "paid"]

        return {
            id,
            client: {
                phone: `+38063****${600 + index}`,
                fullName: `Клієнт ${index + 1}`,
            },
            createdDate: `2025-11-${String(6 - (index % 5)).padStart(2, "0")}T10:${String(
                index % 60
            ).padStart(2, "0")}:00`,
            totalLimit: 10000,
            usedLimit: index % 3 === 0 ? 0 : (index + 1) * 100,
            penalty: index % 5 === 0 ? 150 : 0,
            debtAmount:
                index % 3 === 0 ? 0 : (index + 1) * 100 + (index % 5 === 0 ? 150 : 0),
            status: statuses[index % statuses.length],
        }
    }),
]

export const creditsTablePaginationMock: PaginationMeta = {
    pageSize: 10,
    pageSizeVariants: [5,10,15,20]
}

