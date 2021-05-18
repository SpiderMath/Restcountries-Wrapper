import { Country } from "./Types";
import Data from "./Data";

class RestCountryWrapper {
	private updateCache: number;
	private cache: Country[] = Data;

	constructor(updateCache: number = 24) {
		if(typeof updateCache !== "number") throw new Error("Expected updateCache to be a Number, it is NaN");
		this.updateCache = updateCache;
	}

	private _getms() {
		return this.updateCache * 60 * 60 * 1000;
	}

	/**
	 * 
	 * @param query The name of the country you want to search for
	 * @param sort Whether you want the array to be sorted by the length of the name of the country
	 */
	public getCountryByName(query: string, sort: boolean = false) {
		if(typeof query !== "string") throw new Error("query is not a String");
		const regex = new RegExp(query, "gi");

		const data = this.cache.filter(country => regex.test(country.name) || regex.test(country.alpha2Code) || regex.test(country.alpha3Code) || regex.test(country.nativeName) || country.altSpellings.map(spelling => regex.test(spelling)).includes(true) || Object.values(country.translations).map(translation => regex.test(translation)).includes(true));

		if(sort) data.sort((a, b) => a.name.length - b.name.length);
		return data;
	}
};

export { RestCountryWrapper };

const e = new RestCountryWrapper();

console.log(e.getCountryByName("India", true));