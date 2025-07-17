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
    getAllCountries: async ():Promise<Country[]> => {
        const response = await api.get('/all?fields=name,flags,cca2');
        return response.data;
    }
}