import { useQuery } from "@tanstack/react-query";
import { countryApi } from "../services/countryApi";


export const useCountries = () => {
    return useQuery({
        queryKey: ["countries"],
        queryFn: countryApi.getAllCountries,
        staleTime: 1000 * 60 * 5, 
    })
}

export const useSearchCountries = (query: string) => {
    return useQuery({
        queryKey: ["searchCountries", query],
        queryFn: () => countryApi.searchCountries(query),
        enabled: !!query, 
        staleTime: 1000 * 60 * 5, 
    })
}

export const useCountriesByRegion = (region: string) => {
    return useQuery({
        queryKey: ["countriesByRegion", region],
        queryFn: () => countryApi.getCountriesByRegion(region),
        enabled: !!region, 
        staleTime: 1000 * 60 * 5, 
    })
}

export const useCountryByCode = (code: string) => {
    return useQuery({
        queryKey: ["countryByCode", code],
        queryFn: () => countryApi.getCountryByCode(code),
        enabled: !!code, 
        staleTime: 1000 * 60 * 5, 
    })
}