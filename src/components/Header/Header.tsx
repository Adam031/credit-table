import {HeaderTitle} from "./HeaderTitle.tsx";
import {Filters} from "../Filters/Filters.tsx";
import {Search} from "../Search/Search.tsx";

export const Header = () => {
    return (
        <>
            <HeaderTitle />
            <div className="flex pl-4 mt-4 gap-4">
                <Search />
                <Filters />
            </div>
        </>
    )
}