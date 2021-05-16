declare type CurrencyResponse = {
    name: string;
    code: string;
    symbol: string;
};
declare type LanguageResponse = {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
};
declare type CountryBlocResponse = {
    name: string;
    acronym: string;
    otherAcronyms: string;
    otherNames: string;
};
declare type CountryResponse = {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    region: string;
    subregion: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string;
    nativeName: string;
    numericCode: string;
    currencies: CurrencyResponse[];
    languages: LanguageResponse;
    translations: {
        de: string;
        es: string;
        fr: string;
        ja: string;
        it: string;
        br: string;
        pt: string;
    };
    flag: string;
    cioc: string;
    regionalBlocs: CountryBlocResponse[];
};
declare class RestCountriesWrapper {
    /**
     * Gets the Data for all the countries listed in the Database
     */
    static allCountries(): Promise<CountryResponse[]>;
    /**
     * @default fullName false
     * @param query The name of the country you want to search for
     * @param fullName Whether the input text is the full name of the country or not
     * Fetches a country by its name
     */
    static getCountryByName(query: string, fullName?: boolean): Promise<CountryResponse[]>;
    /**
     * Looks for a country by its ISO Code
     * @param code ISO Code of the Country
     */
    static getCountryByISOCode(code: string): Promise<CountryResponse>;
    /**
     * Looks for multiple countries by ISO Codes
     * @param codes The codes of the countries for which you want to Search
     */
    static getCountriesByISOCodes(codes: string[]): Promise<CountryResponse[]>;
    /**
     * @param code Currency code for which you want to search
     * Gets the country for which the given currency code matches
     */
    static getCountryByCurrencyCode(code: string): Promise<CountryResponse[]>;
    /**
     * @param capital The capital for which you want to know the country
     * Gets the country data from its capital
     */
    static getCountryByCapital(capital: string): Promise<CountryResponse[]>;
    /**
     * @param lang Language for which you want to search
     * Gets all the countries where a language is official
     */
    static getCountriesByLanguage(lang: string): Promise<CountryResponse[]>;
    /**
     * @param code The call code using which you want to look for the country
     * Gets the data for a country using the corresponding call code
     */
    static getCountryByCallingCode(code: string): Promise<CountryResponse[]>;
    /**
     * Gets all the countries in a region
     * @param region The region for which you want to know all the countries of
     */
    static getCountriesByRegion(region: 'africa' | 'americas' | 'asia' | 'europe' | 'oceania'): Promise<CountryResponse[]>;
    /**
     * @param bloc The regional block for which you want the data
     * Gets data about the countries in a special bloc
     */
    static getCountriesRegionalBloc(bloc: 'eu' | 'efta' | 'caricom' | 'pa' | 'au' | 'usan' | 'eeu' | 'al' | 'asean' | 'cais' | 'cefta' | 'nafta' | 'saarc'): Promise<any>;
}
export { CountryBlocResponse, CountryResponse, CurrencyResponse, LanguageResponse, RestCountriesWrapper };
//# sourceMappingURL=index.d.ts.map