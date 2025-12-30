import {useEffect, useState} from "react"

export const useColumnVisibility = (defaultColumnKeys:string[]) => {
    const [visibleColumns, setVisibleColumns] = useState<string[]>(() => {
        const saved = localStorage.getItem("visibleColumns")
        return saved ? JSON.parse(saved) : defaultColumnKeys
    })

    useEffect(() => {
        localStorage.setItem("visibleColumns", JSON.stringify(visibleColumns))
    }, [visibleColumns])

    const reset = () => setVisibleColumns(defaultColumnKeys)

    return {
        visibleColumns,
        setVisibleColumns,
        reset
    }
}