import {Header} from "./components/Header/Header.tsx";
import {CreditsTable} from "./components/CreditsTable/CreditsTable.tsx";
import {Footer} from "./components/Footer/Footer.tsx";

export function App() {

  return (
    <>
      <div className="container mx-auto my-5 bg-white rounded-lg shadow-lg">
        <Header />
        <CreditsTable />
        <Footer />
      </div>
    </>
  )
}
