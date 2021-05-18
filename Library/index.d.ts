import { Country } from "./Types";
declare class RestCountryWrapper {
    private updateCache;
    private cache;
    constructor(updateCache?: number);
    private _getms;
    /**
     * @param query The name of the country you want to search for
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     */
    getCountryByName(query: string, fullText?: boolean, sort?: boolean): Country[];
    /**
     * @param query The ISO code or language name
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     */
    getCountryByLanguage(query: string, sort?: boolean): Country[];
    /**
     * @param query The ISO code or language name
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     */
    getCountryByCapital(query: string, sort?: boolean): Country[];
    /**
     * @param query The ISO code or language name
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     */
    getCountryByISOCode(query: string, sort?: boolean): Country[];
    /**
     * @param query The region from which you wanna get your stuff
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     */
    getCountryByRegion(query: "Africa" | "Americas" | "Asia" | "Europe" | "Oceania", sort?: boolean): Country[];
    /**
     * @param query The Subregion name in which you are looking for countries
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     */
    getCountryBySubRegion(query: string, sort?: boolean): Country[];
    /**
     * @param query The currency code (/ currency name if specified) to search for
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     * @param includeCurrencyName Whether you want to include names & symbols of currencies in the search as well
     */
    getCountryByCurrencyCode(query: string, sort?: boolean, includeCurrencyName?: boolean): Country[];
    /**
     * @param query The calling code to search for
     */
    getCountryByCallingCode(query: string): boolean[];
    /**
     * @param query The code of the regional bloc you want to search for
     * @param sort Whether you want the array to be sorted by the length of the name of the country
    */
    getCountryByRegionalBloc(query: string, sort: boolean): Country[];
    /**
     * @param query The TLD of the nation
     */
    getCountryByTLD(query: string): Country[];
    getAllCountries(): Country[];
}
export { RestCountryWrapper };
//# sourceMappingURL=index.d.ts.map