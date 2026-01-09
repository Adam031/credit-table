import {CreditsTable} from "./components/CreditsTable/CreditsTable.tsx";
import {BrowserRouter} from "react-router-dom";
import {CreditsTableTitle} from "./components/CreditsTable/CreditsTableTitle.tsx"
import {useCreditsData} from "./hooks/useCreditsData.ts"
import {Preloader} from "./components/Preloader/Preloader.tsx"

export function App() {
    const { credits, isLoading } = useCreditsData()

    return (
        <BrowserRouter>
            <div className="container mx-auto my-5 bg-white rounded-xl shadow-lg">
                <CreditsTableTitle/>
                {isLoading ? <Preloader/> : <CreditsTable credits={credits} />}
            </div>
        </BrowserRouter>
    )
}
