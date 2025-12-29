import {CreditsTable} from "./components/CreditsTable/CreditsTable.tsx";
import {BrowserRouter} from "react-router-dom";
import {CreditsTableTitle} from "./components/CreditsTable/CreditsTableTitle.tsx"

export function App() {

    return (
        <BrowserRouter>
            <div className="container mx-auto my-5 bg-white rounded-xl shadow-lg">
                <CreditsTableTitle/>
                <CreditsTable/>
            </div>
        </BrowserRouter>
    )
}
