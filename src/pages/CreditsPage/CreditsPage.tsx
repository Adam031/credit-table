import {useCreditsData} from "../../features/credits/hooks/useCreditsData.ts"
import {CreditsTableContainer} from "../../features/credits/ui/CreditsTableContainer.tsx"
import {CreditsPageTitle} from "./CreditsPageTitle.tsx"
import {Preloader} from "../../shared/ui/Preloader/Preloader.tsx"

export const CreditsPage = () => {
    const { credits, isLoading } = useCreditsData()

    return (
        <div className="container mx-auto my-5 bg-white rounded-xl shadow-lg">
            <CreditsPageTitle credits={credits} />
            {isLoading ? <Preloader/> : <CreditsTableContainer credits={credits} />}
        </div>
    )
}