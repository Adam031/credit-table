import resetIcon from "../../assets/reset.svg"
import {Checkbox, ListItemText, MenuItem, Select} from "@mui/material"

type Props = {
    filteredStatusValues: string[]
    statusValues: string[]
    onStatusFiltering: (values: string[]) => void
    resetStatusFilter: () => void
}

export const StatusFilter = ({filteredStatusValues, statusValues, onStatusFiltering, resetStatusFilter} : Props) => {
    return (
        <div className="flex mt-5">
            Filters:
            <Select
                multiple
                className="h-7 overflow-hidden ml-3"
                value={filteredStatusValues}
                onChange={(e) => onStatusFiltering(e.target.value as string[])}
                renderValue={() => 'Status'}
            >
                {statusValues.map((value) => (
                    <MenuItem key={value} value={value}>
                        <Checkbox checked={filteredStatusValues.includes(value)} />
                        <ListItemText primary={value} />
                    </MenuItem>
                ))}
            </Select>
            <img src={resetIcon} width={20} height={20} alt="reset icon" className="cursor-pointer flex ml-4" onClick={resetStatusFilter} />
        </div>
    )
}