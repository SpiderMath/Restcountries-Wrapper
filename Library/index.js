"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestCountriesWrapper = void 0;
const axios_1 = __importDefault(require("axios"));
const Base_URL = 'https://restcountries.eu/rest/v2';
class RestCountriesWrapper {
    /**
     * Gets the Data for all the countries listed in the Database
     */
    static async allCountries() {
        const response = await axios_1.default.get(`${Base_URL}/all`);
        const data = response.data;
        return data;
    }
    /**
     * @default fullName false
     * @param query The name of the country you want to search for
     * @param fullName Whether the input text is the full name of the country or not
     * Fetches a country by its name
     */
    static async getCountryByName(query, fullName = false) {
        const response = await axios_1.default.get(`${Base_URL}/name/${query}${fullName ? '?fullText=true' : ''}`);
        const data = response.data;
        return data;
    }
    /**
     * Looks for a country by its ISO Code
     * @param code ISO Code of the Country
     */
    static async getCountryByISOCode(code) {
        const response = await axios_1.default.get(`${Base_URL}/alpha/${code}`);
        const data = response.data;
        return data;
    }
    /**
     * Looks for multiple countries by ISO Codes
     * @param codes The codes of the countries for which you want to Search
     */
    static async getCountriesByISOCodes(codes) {
        const response = await axios_1.default.get(`${Base_URL}/alpha?codes=${codes.join(';')}`);
        const data = response.data;
        return data;
    }
    /**
     * @param code Currency code for which you want to search
     * Gets the country for which the given currency code matches
     */
    static async getCountryByCurrencyCode(code) {
        const response = await axios_1.default.get(`${Base_URL}/currency/${code}`);
        const data = response.data;
        return data;
    }
    /**
     * @param capital The capital for which you want to know the country
     * Gets the country data from its capital
     */
    static async getCountryByCapital(capital) {
        const response = await axios_1.default.get(`${Base_URL}/capital/${capital}`);
        const data = response.data;
        return data;
    }
    /**
     * @param lang Language for which you want to search
     * Gets all the countries where a language is official
     */
    static async getCountriesByLanguage(lang) {
        const response = await axios_1.default.get(`${Base_URL}/lang/${lang}`);
        const data = response.data;
        return data;
    }
    /**
     * @param code The call code using which you want to look for the country
     * Gets the data for a country using the corresponding call code
     */
    static async getCountryByCallingCode(code) {
        const response = await axios_1.default.get(`${Base_URL}/callingcode/${code}`);
        const data = response.data;
        return data;
    }
    /**
     * Gets all the countries in a region
     * @param region The region for which you want to know all the countries of
     */
    static async getCountriesByRegion(region) {
        const response = await axios_1.default.get(`${Base_URL}/region/${region}`);
        const data = response.data;
        return data;
    }
    /**
     * @param bloc The regional block for which you want the data
     * Gets data about the countries in a special bloc
     */
    static async getCountriesRegionalBloc(bloc) {
        const response = await axios_1.default.get(`${Base_URL}/regionalbloc/${bloc}`);
        const data = response.data;
        return data;
    }
}
exports.RestCountriesWrapper = RestCountriesWrapper;
;
//# sourceMappingURL=index.js.map