import {creditsMock} from "../../mock-data/mock-data.ts";

export const CreditsTableTitle = () => {
    const creditsCount = creditsMock.length

    return (
        <div className="pt-4 px-4">
            <h1 className="text-xl flex items-center">
                Credits
                <span className="rounded-3xl bg-blue-500 ml-1.5 text-white py-0.5 px-2 text-[14px]">{creditsCount}</span>
            </h1>
        </div>
    )
}