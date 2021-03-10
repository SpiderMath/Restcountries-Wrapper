import axios from 'axios';

const Base_URL: string = 'https://restcountries.eu/rest/v2';

type CurrencyResponse = {
	name: string,
	code: string,
	symbol: string,
};

type LanguageResponse = {
	iso639_1: string,
	iso639_2: string,
	name: string,
	nativeName: string,
};

type CountryBlocResponse = {
	name: string,
	acronym: string,
	otherAcronyms: string,
	otherNames: string,
};

type CountryResponse = {
	name: string,
	topLevelDomain: string[],
	alpha2Code: string,
	alpha3Code: string,
	callingCodes: string[],
	capital: string,
	altSpellings: string[],
	region: string,
	subregion: string,
	population: number,
	latlng: number[],
	demonym: string,
	area: number,
	gini: number,
	timezones: string[],
	borders: string,
	nativeName: string,
	numericCode: string,
	currencies: CurrencyResponse[],
	languages: LanguageResponse,
	translations: {
		de: string,
		es: string,
		fr: string,
		ja: string,
		it: string,
		br: string,
		pt: string,
	},
	flag: string,
	cioc: string,
	regionalBlocs: CountryBlocResponse[],
};

class RestCountriesWrapper {

	/**
	 * Gets the Data for all the countries listed in the Database
	 */
	static async allCountries(): Promise<CountryResponse[]> {
		const response = await axios.get(`${Base_URL}/all`);

		const data: CountryResponse[] = response.data;

		return data;
	}

	/**
	 * @default fullName false
	 * @param query The name of the country you want to search for
	 * @param fullName Whether the input text is the full name of the country or not
	 * Fetches a country by its name
	 */
	static async getCountryByName(query: string, fullName: boolean = false): Promise<CountryResponse[]> {
		const response = await axios.get(`${Base_URL}/name/${query}${fullName ? '?fullText=true' : ''}`);

		const data: CountryResponse[] = response.data;

		return data;
	}

	/**
	 * Looks for a country by its ISO Code
	 * @param code ISO Code of the Country
	 */
	static async getCountryByISOCode(code: string): Promise<CountryResponse> {
		const response = await axios.get(`${Base_URL}/alpha/${code}`);

		const data: CountryResponse = response.data;

		return data;
	}

	/**
	 * Looks for multiple countries by ISO Codes
	 * @param codes The codes of the countries for which you want to Search
	 */
	static async getCountriesByISOCodes(codes: string[]): Promise<CountryResponse[]> {
		const response = await axios.get(`${Base_URL}/alpha?codes=${codes.join(';')}`);

		const data: CountryResponse[] = response.data;

		return data;
	}

	/**
	 * @param code Currency code for which you want to search
	 * Gets the country for which the given currency code matches
	 */
	static async getCountryByCurrencyCode(code: string): Promise<CountryResponse[]> {
		const response = await axios.get(`${Base_URL}/currency/${code}`);

		const data: CountryResponse[] = response.data;

		return data;
	}

	/**
	 * @param capital The capital for which you want to know the country
	 * Gets the country data from its capital
	 */
	static async getCountryByCapital(capital: string): Promise<CountryResponse[]> {
		const response = await axios.get(`${Base_URL}/capital/${capital}`)

		const data: CountryResponse[] = response.data;

		return data;
	}

	/**
	 * @param lang Language for which you want to search
	 * Gets all the countries where a language is official
	 */
	static async getCountriesByLanguage(lang: string): Promise<CountryResponse[]> {
		const response = await axios.get(`${Base_URL}/lang/${lang}`);

		const data: CountryResponse[] = response.data;

		return data;
	}

	/**
	 * @param code The call code using which you want to look for the country
	 * Gets the data for a country using the corresponding call code
	 */
	static async getCountryByCallingCode(code: string): Promise<CountryResponse[]> {
		const response = await axios.get(`${Base_URL}/callingcode/${code}`);

		const data: CountryResponse[] = response.data;

		return data;
	}

	/**
	 * Gets all the countries in a region
	 * @param region The region for which you want to know all the countries of
	 */
	static async getCountriesByRegion(region: 'africa' | 'americas' | 'asia' | 'europe' | 'oceania'): Promise<CountryResponse[]> {
		const response = await axios.get(`${Base_URL}/region/${region}`);

		const data: CountryResponse[] = response.data;

		return data;
	}

	/**
	 * @param bloc The regional block for which you want the data
	 * Gets data about the countries in a special bloc
	 */
	static async getCountriesRegionalBloc(bloc: 'eu' | 'efta' | 'caricom' | 'pa' | 'au' | 'usan' | 'eeu' | 'al' | 'asean' | 'cais' | 'cefta' | 'nafta' | 'saarc') {
		const response = await axios.get(`${Base_URL}/regionalbloc/${bloc}`);

		const data = response.data;

		return data;
	}
};

export { CountryBlocResponse, CountryResponse, CurrencyResponse, LanguageResponse, RestCountriesWrapper };