import {CreditsTableHeader} from "./CreditsTableHeader.tsx";
import {CreditsTableRow} from "./CreditsTableRow.tsx";
import {creditsMock} from "../../mock-data/mock-data.ts";

export const CreditsTable = () => {
    return (
        <>
            <table className="table-fixed w-full mt-5">
                <CreditsTableHeader />
                <tbody>
                    {creditsMock.map((credit) => <CreditsTableRow key={credit.id} credit={credit} />)}
                </tbody>
            </table>
        </>
    )
}