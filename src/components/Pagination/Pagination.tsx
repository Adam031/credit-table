type PaginationProps = {
    page: number
    pageSize: number
    totalPages: number
    totalItems: number
    pageSizeVariants: Array<number>
    setPage: (page: number) => void
    setPageSize: (size: number) => void
};

export const Pagination = ({page, pageSize, totalPages, totalItems, pageSizeVariants, setPage, setPageSize }: PaginationProps) => {
    if (totalPages <= 1) return null

    const startItem = (page - 1) * pageSize + 1
    const endItem = Math.min(page * pageSize, totalItems)

    const goPrev = () => setPage(Math.max(1, page - 1))
    const goNext = () => setPage(Math.min(totalPages, page + 1))

    return (
        <div className="flex items-center justify-end gap-7 mt-4 p-4">
            <div className="flex items-center gap-2">
                <p>Credits per page</p>
                <select value={pageSize} onChange={(e) => {
                    setPageSize(Number(e.currentTarget.value))
                }}>
                    {pageSizeVariants.map(variant =>
                        <option key={variant} value={variant}>{variant}</option>
                    )}
                </select>
            </div>

            <div>
                {startItem}-{endItem} of {totalItems}
            </div>

            <div className="flex items-center gap-3">
                <button
                    onClick={goPrev}
                    disabled={page === 1}
                    className="px-1 py-1 text-2xl disabled:opacity-50 cursor-pointer"
                >
                    {"<"}
                </button>

                <button
                    onClick={goNext}
                    disabled={page === totalPages}
                    className="px-1 py-1 text-2xl disabled:opacity-50 cursor-pointer"
                >
                    {">"}
                </button>
            </div>
        </div>
    )
}