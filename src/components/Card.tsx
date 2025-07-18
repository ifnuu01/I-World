import type { Country } from "@/types/type"
import { Link } from "react-router-dom"

function Card({ country }: { country: Country }) {
    return (
        <Link
            key={country.cca3}
            to={`/country/${country.cca2}`}
            className="border border-main-dark p-4 rounded-lg flex md:flex-col flex-row items-center justify-between mb-4 w-full md:w-[200px] shadow-md cursor-pointer hover:scale-105 transition-transform"
        >
            <img src={country.flags.png} alt={country.name.common} className="w-40 h-30 md:w-40 md:h-30 shadow-2xl rounded-md" />
            <span className="text-xl font-bold text-white md:mt-4 ml-4 text-right md:text-center md:ml-0">{country.name.common}</span>
        </Link>
    )
}

export default Card