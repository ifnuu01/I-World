import axios from "axios";
import type { Country } from "../types/type";

const BASE_URL = 'https://restcountries.com/v3.1';

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
})

export const countryApi = {
    getAllCountries: async (): Promise<Country[]> => {
        const response = await api.get('/all?fields=name,flags,cca2,cca3,region');
        return response.data;
    },
    
    searchCountries: async (query: string): Promise<Country[]> => {
        try {
            const response = await api.get(`/name/${encodeURIComponent(query)}?fields=name,flags,cca2,cca3,region`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
                return []; 
            }
            throw error;
        }
    },
    
    getCountriesByRegion: async (region: string): Promise<Country[]> => {
        try {
            const response = await api.get(`/region/${encodeURIComponent(region)}?fields=name,flags,cca2,cca3,region`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
                return []; 
            }
            throw error;
        }
    },

    getCountryByCode: async (code: string): Promise<Country> => {
        try {
            const response = await api.get(`/alpha/${encodeURIComponent(code)}?fields=name,capital,flags,population,region,subregion,cca2,cca3,borders,currencies,languages,maps,continents,tld,callingCodes`);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.status === 404) {
                throw new Error("Country not found");
            }
            throw error;
        }
    }
}