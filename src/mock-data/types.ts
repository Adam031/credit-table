export type CreditStatus = 'new' | 'paid' | 'active'

export type ClientType = {
    phone: string
    fullName: string
}

export type Credit = {
    id: number
    client: ClientType
    createdDate: string
    totalLimit: number
    usedLimit: number
    penalty: number
    debtAmount: number
    status: CreditStatus
}

export type PaginationMeta = {
    pageSize: number
    pageSizeVariants: Array<number>
}
