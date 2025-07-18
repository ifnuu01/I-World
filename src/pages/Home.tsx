import SearchAndFilter from "@/components/SearchAndFilter";
import { useCountries, useSearchCountries, useCountriesByRegion } from "../hooks/useCountries";
import { useState } from "react";
import type { Country } from "@/types/type";
import Card from "@/components/Card";

function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");

    const { data: allCountries, isLoading: allLoading, error: allError } = useCountries();
    const { data: searchResults, isLoading: searchLoading, error: searchError } = useSearchCountries(searchQuery);
    const { data: regionResults, isLoading: regionLoading, error: regionError } = useCountriesByRegion(selectedRegion);

    const getDisplayedCountries = (): Country[] => {
        if (searchQuery) {
            return searchResults || [];
        }
        if (selectedRegion) {
            return regionResults || [];
        }
        return allCountries || [];
    };

    const isLoading = searchQuery ? searchLoading :
        selectedRegion ? regionLoading :
            allLoading;


    const error = searchQuery ? searchError :
        selectedRegion ? regionError :
            allError;

    const countries = getDisplayedCountries();

    const handleSearch = (query: string) => {
        setSearchQuery(query.trim());
        setSelectedRegion("");
    };

    const handleRegionFilter = (region: string) => {
        setSelectedRegion(region);
        setSearchQuery("");
    };

    const handleClearFilters = () => {
        setSearchQuery("");
        setSelectedRegion("");
    };

    return (
        <div className="">
            <SearchAndFilter
                onSearch={handleSearch}
                onRegionFilter={handleRegionFilter}
                onClearFilters={handleClearFilters}
                isLoading={isLoading}
            />

            {isLoading && (
                <div className="flex justify-center items-center py-20">
                    <div className="text-white text-xl">Loading...</div>
                </div>
            )}

            {error && (
                <div className="flex justify-center items-center py-20">
                    <div className="text-red-500 text-xl">Error loading countries: {error.message}</div>
                </div>
            )}

            {!isLoading && !error && countries && countries.length === 0 && (
                <div className="flex justify-center items-center py-20">
                    <div className="text-white text-xl">No countries found</div>
                </div>
            )}

            {!isLoading && countries && countries.length > 0 && (
                <>
                    <p className="mb-4">Showing {countries.length} countries</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 md:gap-16 w-full">
                        {countries.map((country) => (
                            <Card key={country.cca3} country={country} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default Home