import { useQuery } from "@tanstack/react-query";
import { countryApi } from "../services/countryApi";


export const useCountries = () => {
    return useQuery({
        queryKey: ["countries"],
        queryFn: countryApi.getAllCountries,
        staleTime: 1000 * 60 * 5, 
    })
}