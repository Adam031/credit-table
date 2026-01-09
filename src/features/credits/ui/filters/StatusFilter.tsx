import {Checkbox, ListItemText, MenuItem, Select} from "@mui/material"

type Props = {
    filteredStatusValues: string[]
    statusValues: string[]
    onStatusFiltering: (values: string[]) => void
}

export const StatusFilter = ({filteredStatusValues, statusValues, onStatusFiltering} : Props) => {
    const handleSelectedValues = (selected:string[]) => {
        if (!selected.length) {
            return <span className="text-gray-400">All statuses</span>
        }

        return selected.join(", ")
    }

    return (
        <div className="flex mt-5">
            Filters:
            <Select
                multiple
                displayEmpty
                className="h-7 overflow-hidden ml-3"
                value={filteredStatusValues}
                onChange={(e) => onStatusFiltering(e.target.value as string[])}
                renderValue={(selected) => handleSelectedValues(selected)}
            >
                {statusValues.map((value) => (
                    <MenuItem key={value} value={value}>
                        <Checkbox checked={filteredStatusValues.includes(value)} />
                        <ListItemText primary={value} />
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}