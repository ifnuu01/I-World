import { useCountryByCode } from "@/hooks/useCountries";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";


function CountryDetail() {
    const { code } = useParams<{ code: string }>();

    const { data: country, isLoading, error } = useCountryByCode(code as string);

    if (isLoading) {
        return <div className="text-center text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error.message}</div>;
    }

    return (
        <div>
            <Link to="/" className="mb-4">
                <Button className="mb-4 bg-main-dark hover:bg-main-light text-white cursor-pointer">
                    <Icon icon="mdi:arrow-left" width={20} height={20} className="mr-2" />
                    Back to Home
                </Button>
            </Link>

            <div className="flex gap-4 items-end mt-4">
                <img src={country?.flags?.png} alt="" className="w-40 rounded-lg shadow-md" />
                <div>
                    <h1 className="font-bold text-2xl">{country?.name?.common}</h1>
                    <p className="text-secondary-dark text-md">{country?.name?.official}</p>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="border border-main-dark p-4 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <h2 className="text-lg">Population</h2>
                        <p className="text-main-light font-bold ">{country?.population.toLocaleString()}</p>
                    </div>
                    <Icon icon="mdi:account-group" width={40} height={40} className="text-main-dark" />
                </div>
                <div className="border border-main-dark p-4 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <h2 className="text-lg">Region</h2>
                        <p className="text-main-light font-bold ">{country?.region}</p>
                    </div>
                    <Icon icon="mdi:world" width={40} height={40} className="text-main-dark" />
                </div>
                <div className="border border-main-dark p-4 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <h2 className="text-lg">Subregion</h2>
                        <p className="text-main-light font-bold ">{country?.subregion}</p>
                    </div>
                    <Icon icon="mdi:world" width={40} height={40} className="text-main-dark" />
                </div>
                <div className="border border-main-dark p-4 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                        <h2 className="text-lg">Capital</h2>
                        <p className="text-main-light font-bold ">{country?.capital}</p>
                    </div>
                    <Icon icon="grommet-icons:location" width={40} height={40} className="text-main-dark" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 mt-4">
                <div className="row-span-2 p-4 border border-main-dark rounded-lg shadow-md h-fit">
                    <h1 className="text-2xl text-main-light">Flag</h1>
                    <img src={country?.flags?.svg} alt="" className="mt-4 w-full rounded-md" />
                    <p className="text-white mt-4 text-xs font-mono">{country?.flags?.alt}</p>
                </div>
                <div className="border border-main-dark p-4 rounded-lg shadow-md">
                    <div className="flex gap-4 items-center">
                        <Icon icon="mdi:world" width={40} height={40} className="text-main-dark" />
                        <h1 className="text-lg text-main-light">Basic Information</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <p className="text-secondary-dark">Official Name</p>
                            <p className="text-main-light font-bold">{country?.name?.official}</p>
                        </div>
                        <div>
                            <p className="text-secondary-dark">Common Name</p>
                            <p className="text-main-light font-bold">{country?.name?.common}</p>
                        </div>
                        <div >
                            <h1 className="text-main-light">Capital</h1>
                            <Button className="bg-main-dark hover:bg-main-light mt-2">{country?.capital}</Button>
                        </div>
                        <div >
                            <h1 className="text-main-light">Continents</h1>
                            {
                                country?.continents?.map((continent, index) => (
                                    <Button key={index} className="bg-main-dark hover:bg-main-light mt-2 mr-2">
                                        {continent}
                                    </Button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="mt-4">
                        <h1 className="text-main-light">Languages</h1>
                        <Button className="bg-main-dark hover:bg-main-light mt-2">
                            {
                                Object.entries(country?.languages || {}).map(([key, value]) => (
                                    <div key={key} className="flex justify-between">
                                        <span className="text-white font-bold">{value}</span>
                                    </div>
                                ))
                            }
                        </Button>
                    </div>

                </div>
                <div className="md:col-start-2 md:row-start-2 border border-main-dark p-4 rounded-lg shadow-md h-fit">
                    <div className="flex gap-4 items-center">
                        <Icon icon="grommet-icons:location" width={40} height={40} className="text-main-dark" />
                        <h1 className="text-lg text-main-light">Location</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div>
                            <p className="text-secondary-dark">Region</p>
                            <p className="text-main-light font-bold">{country?.region}</p>
                        </div>
                        <div>
                            <p className="text-secondary-dark">Subregion</p>
                            <p className="text-main-light font-bold">{country?.subregion}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-secondary-dark">Google Maps</p>
                            <a href={country?.maps?.googleMaps} target="_blank" rel="noopener noreferrer" className="w-fit">
                                <Button className="bg-main-dark hover:bg-main-light cursor-pointer">
                                    <Icon icon="mdi:map" width={20} height={20} className="mr-2" />
                                    View on Google Maps
                                </Button>
                            </a>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-secondary-dark">OpenStreet Map</p>
                            <a href={country?.maps?.openStreetMaps} target="_blank" rel="noopener noreferrer" className="w-fit">
                                <Button className="bg-main-dark hover:bg-main-light cursor-pointer">
                                    <Icon icon="mdi:map" width={20} height={20} className="mr-2" />
                                    View on OpenStreet Map
                                </Button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>



        </div >
    )
}

export default CountryDetail