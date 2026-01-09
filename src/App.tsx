import {BrowserRouter} from "react-router-dom";
import {CreditsPage} from "./pages/CreditsPage/CreditsPage.tsx"

export function App() {
    return (
        <BrowserRouter>
            <CreditsPage />
        </BrowserRouter>
    )
}
