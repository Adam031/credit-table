import {Header} from "./components/Header/Header.tsx";
import {CreditsTable} from "./components/CreditsTable/CreditsTable.tsx";
import {BrowserRouter } from "react-router-dom";

export function App() {

  return (
    <BrowserRouter>
      <div className="container mx-auto my-5 bg-white rounded-xl shadow-lg">
        <Header />
        <CreditsTable />
      </div>
    </BrowserRouter>
  )
}
