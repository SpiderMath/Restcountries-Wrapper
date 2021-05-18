"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestCountryWrapper = void 0;
const Data_1 = __importDefault(require("./Data"));
class RestCountryWrapper {
    constructor() {
        this.cache = [];
        this.cache = Data_1.default;
    }
    /**
     * @param query The name of the country you want to search for
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     */
    getCountryByName(query, fullText = false, sort = false) {
        if (typeof query !== "string")
            throw new Error("query is not a String");
        const regex = new RegExp(query, "gi");
        let data;
        if (!fullText)
            data = this.cache.filter(country => regex.test(country.name) || regex.test(country.alpha2Code) || regex.test(country.alpha3Code) || regex.test(country.nativeName) || country.altSpellings.map(spelling => regex.test(spelling)).includes(true) || Object.values(country.translations).map(translation => regex.test(translation)).includes(true));
        else
            data = this.cache.filter(country => regex.test(country.name) || regex.test(country.nativeName)).sort((a, b) => a.name.length - b.name.length);
        if (sort)
            data.sort((a, b) => a.name.length - b.name.length);
        return data;
    }
    /**
     * @param query The ISO code or language name
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     */
    getCountryByLanguage(query, sort = false) {
        if (typeof query !== "string")
            throw new Error("query is not a String");
        const regex = new RegExp(query, "gi");
        const data = this.cache.filter(country => country.languages.map(language => regex.test(language.iso639_1 || "") || regex.test(language.iso639_2) || regex.test(language.name) || regex.test(language.nativeName)).includes(true));
        if (sort)
            data.sort((a, b) => a.name.length - b.name.length);
        return data;
    }
    /**
     * @param query The Capital query
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     */
    getCountryByCapital(query, sort = false) {
        if (typeof query !== "string")
            throw new Error("query is not a String");
        const regex = new RegExp(query, "gi");
        const data = this.cache.filter(country => regex.test(country.capital));
        if (sort)
            data.sort((a, b) => a.name.length - b.name.length);
        return data;
    }
    /**
     * @param query The ISO code or language name
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     */
    getCountryByISOCode(query, sort = false) {
        if (typeof query !== "string")
            throw new Error("query is not a String");
        const regex = new RegExp(query, "gi");
        const data = this.cache.filter(country => regex.test(country.capital));
        if (sort)
            data.sort((a, b) => a.name.length - b.name.length);
        return data;
    }
    /**
     * @param query The region from which you wanna get your stuff
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     */
    getCountryByRegion(query, sort = false) {
        if (typeof query !== "string")
            throw new Error("query is not a String");
        const regex = new RegExp(query, "gi");
        const data = this.cache.filter(country => regex.test(country.region));
        if (sort)
            data.sort((a, b) => a.name.length - b.name.length);
        return data;
    }
    /**
     * @param query The Subregion name in which you are looking for countries
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     */
    getCountryBySubRegion(query, sort = false) {
        if (typeof query !== "string")
            throw new Error("query is not a String");
        const regex = new RegExp(query, "gi");
        const data = this.cache.filter(country => regex.test(country.subregion));
        if (sort)
            data.sort((a, b) => a.name.length - b.name.length);
        return data;
    }
    /**
     * @param query The currency code (/ currency name if specified) to search for
     * @param sort Whether you want the array to be sorted by the length of the name of the country
     * @param includeCurrencyName Whether you want to include names & symbols of currencies in the search as well
     */
    getCountryByCurrencyCode(query, sort = false, includeCurrencyName = false) {
        if (typeof query !== "string")
            throw new Error("query is not a String");
        const regex = new RegExp(query, "gi");
        let data;
        // @ts-ignore
        if (!includeCurrencyName)
            data = this.cache.filter(country => country.currencies.map(curr => regex.test(curr.code)).includes(true));
        // @ts-ignore
        else
            data = this.cache.filter(country => country.currencies.map(curr => regex.test(curr.code) || regex.test(curr.name) || regex.test(curr.symbol)).includes(true));
        if (sort)
            data.sort((a, b) => a.name.length - b.name.length);
        return data;
    }
    /**
     * @param query The calling code to search for
     */
    getCountryByCallingCode(query) {
        if (typeof query !== "string")
            throw new Error("query is not a String");
        return this.cache.map(country => country.callingCodes.includes(query.replace(/+/g, "")));
    }
    /**
     * @param query The code of the regional bloc you want to search for
     * @param sort Whether you want the array to be sorted by the length of the name of the country
    */
    getCountryByRegionalBloc(query, sort) {
        if (typeof query !== "string")
            throw new Error("query is not a String");
        const regex = new RegExp(query, "gi");
        const data = this.cache.filter(country => country.regionalBlocs.map(bloc => regex.test(bloc.acronym) || bloc.otherAcronyms.map(acr => regex.test(acr)).includes(true) || regex.test(bloc.name) || bloc.otherNames.map(name => regex.test(name)).includes(true)).includes(true));
        if (sort)
            data.sort((a, b) => a.name.length - b.name.length);
        return data;
    }
    /**
     * @param query The TLD of the nation
     */
    getCountryByTLD(query) {
        if (typeof query !== "string")
            throw new Error("query is not a String");
        const regex = new RegExp(query, "gi");
        const data = this.cache.filter(country => country.topLevelDomain.map(tld => regex.test(tld.replace(".", ""))).includes(true));
        return data;
    }
    getAllCountries() {
        return Data_1.default;
    }
}
exports.RestCountryWrapper = RestCountryWrapper;
;
//# sourceMappingURL=index.js.map