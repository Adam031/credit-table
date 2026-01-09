import {Checkbox, ListItemText, MenuItem, Select} from "@mui/material"
import resetIcon from '../../../../assets/reset.svg'
import {creditsColumns} from "../columns/columns.tsx"

type Props = {
    visibleColumns: string[]
    setVisibleColumns: (columns: string[]) => void
    resetAllFilters: () => void
}

export const ColumnsVisibility = ({visibleColumns, setVisibleColumns, resetAllFilters} : Props) => {
    return (
        <div className="flex mt-5 pr-4">
            <img src={resetIcon} width={20} height={20} alt="reset icon" className="cursor-pointer" onClick={resetAllFilters} />
            <Select
                multiple
                className="h-7 overflow-hidden ml-3"
                value={visibleColumns}
                onChange={(e) => setVisibleColumns(e.target.value as string[])}
                renderValue={() => 'Visibility'}
            >
                {creditsColumns.map((column) => (
                    <MenuItem key={column.key} value={column.key}>
                        <Checkbox checked={visibleColumns.includes(column.key)} />
                        <ListItemText primary={column.key} />
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}