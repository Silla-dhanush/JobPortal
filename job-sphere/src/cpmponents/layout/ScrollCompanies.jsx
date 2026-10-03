import { companies } from "../../data/companies";

export default function ScrollCompanies() {
    return(
        <div className = "flex flex-col items-center mt-10 bg-gray-100 p-10 mx-auto rounded-lg overflow-hidden w-3/4">
            <h1 className = "text-2xl font-bold p-2" >
                TRUSTED BY TOP COMPANIES WORLDWIDE
            </h1>
            <div className = "flex w-max items-center gap-18 animate-scroll mt-4 w-max">
                {companies.map((company, index) => (
                    <div key={index} className = "flex items-center justify-center p-2 flex-shrink-0">
                        <img src={company.logo} alt={company.name} className = "h-12 w-auto" />
                    </div>
                ))}
            </div>
        </div>
    )
}