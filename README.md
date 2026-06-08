> [!WARNING]
> DEPRECATION WARNING: This project has been archived, as it is irrelevant now. The original service got replaced by '[https://countrylayer.com/](https://countrylayer.com/)' sometime between 20 Sept 2021 and 27 Sept 2021 (according to [Wayback Machine](https://web.archive.org/web/20210601000000*/https://restcountries.eu/)). Maybe they also realised that having 4 year old data was a bad idea. Regardless, if you'd wish, you can still technically use it, because the data, while old, is still saved, so the package works nonetheless! I don't intend to support the new service, as it's an umbrella of API services, and I don't use that anymore.

# Restcountries-wrapper
Hi there 👋  
This is a simple implementation of the data provided by https://restcountries.eu. This implementation works completely without dependencies and also has TypeScript support! 🎉    

> ℹ The package was previously an API Wrapper for [Restcountries](https://restcountries.eu), but I soon noticed that the data there has not been updated in last 4 years. So I decided instead of straining their servers for data, I'd maintain a copy of them in the package. The local data is what is used in the package  

# Import  
- ES6 Import
```ts
import { RestCountryWrapper } from "restcountries-wrapper";

const wrapper = new RestCountryWrapper();
```

- Node.js 
```js
const { RestCountryWrapper } = require("restcountries-wrapper");

const wrapper = new RestCountryWrapper;
```

# Using the Package
1. Import the class as shown in Import

2. Initialise the class (also shown)

3. Use one of the methods as documented below.

# Methods
> ### Note ℹ: All of the boolean values are always false  
<br>

- getAllCountries
	- Gets all the data

- getCountryByName
	- Parameters
		- **query** (Type: string): The name of the country you want to search for
		- **sort** (Type: boolean): Whether you want the array to be sorted by the length of the name of the country
		- **fullText** (Type: boolean): Whether the query provided is the full name of the country
	- It uses regex to find match in the country's `name`, `nativeName`, `altSpellings`, `isoCodes` & `translations`

- getCountryByLanguage
	- Parameters
		- **query**: You already know what it does
		- **sort**: You already know what it does
	- It uses regex *~~again~~* to find matches in language's `ISO Codes`, `name` & `nativeName`

- getCountryByCapital
	- Parameters
		- **query**: Here we go again?
		- **sort**: I guess we go again, always sorts countries by COUNTRY NAME though
	- It uses regex to match with capital name *~~here we go again~~*

- getCountryByISOCode
	- Parameters
		- **query**: Only accepts ISO Codes now, because the first one might be too all encompassing
		- **sort**: Same thing all the time
	- It uses regex to match with ISO Country Codes **only**

- getCountryByRegion
	- Parameters
		- **query**: The type has been set, please check it out in your editor [For lazy people, here is are the types]
		```ts
		type Region = "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";
		```
		- **sort**: Usual Fare By Now NGL
	- Still uses regex because some people who use JS might misspell and regex, why not? Its better NGL

- getCountryBySubRegion
	- It is a new addition, was not present in the API
	- Parameters
		- **query**: Usual stuff
		- **sort**: Sort countries by name length

- getCountryByCurrencyCode
	- Gets countries by currency codes
	- Parameters
		- **query**: Usual query
		- **sort**: How many times to I tell this 🤨 

- getCountryByCallingCode
	- Gets countries by their calling code (Doesn't matter if you use `+` in the calling code query)
	- Parameters
		- **query**: Usual Query, no need to provide `+` of calling code
		- No **sort** here

- getCountryByRegionalBloc
	- Gets countries by their regional bloc, works on both codes and Name and Other Acronyms and Alt names
	- Parameters
		- **query**: Name of regional bloc
		- **sort**: 🎉 It is back into action 😀 

- getCountryByTLD
	- **New** Not present in RestCountries API!
	- Parameters
		- **query**: No need to provide the `.` in the TLD, I do that for ya!
		- No **sort** here *~~again~~*

# Response Type
All Responses come in the form of type **Country[]**  
- Example Output
```json
[
	{
	  "name": "Afghanistan",
	  "topLevelDomain": [
			".af",
	  ],
	  "alpha2Code": "AF",
	  "alpha3Code": "AFG",
	  "callingCodes": [
			"93",
	  ],
	  "capital": "Kabul",
	  "altSpellings": [
			"AF",
			"Afġānistān",
	  ],
	  "region": "Asia",
	  "subregion": "Southern Asia",
	  "population": 27657145,
	  "latlng": [
			33,
			65,
	  ],
	  "demonym": "Afghan",
	  "area": 652230,
	  "gini": 27.8,
	  "timezones": [
			"UTC+04:30",
	  ],
	  "borders": [
			"IRN",
			"PAK",
			"TKM",
			"UZB",
			"TJK",
			"CHN",
	  ],
	  "nativeName": "افغانستان",
	  "numericCode": "004",
	  "currencies": [
			{
		  "code": "AFN",
		  "name": "Afghan afghani",
		  "symbol": "؋",
			},
	  ],
	  "languages": [
			{
		  "iso639_1": "ps",
		  "iso639_2": "pus",
		  "name": "Pashto",
		  "nativeName": "پښتو",
			},
			{
		  "iso639_1": "uz",
		  "iso639_2": "uzb",
		  "name": "Uzbek",
		  "nativeName": "Oʻzbek",
			},
			{
		  "iso639_1": "tk",
		  "iso639_2": "tuk",
		  "name": "Turkmen",
		  "nativeName": "Türkmen",
			},
	  ],
	  "translations": {
			"de": "Afghanistan",
			"es": "Afganistán",
			"fr": "Afghanistan",
			"ja": "アフガニスタン",
			"it": "Afghanistan",
			"br": "Afeganistão",
			"pt": "Afeganistão",
			"nl": "Afghanistan",
			"hr": "Afganistan",
			"fa": "افغانستان",
	  },
	  "flag": "https://restcountries.eu/data/afg.svg",
	  "regionalBlocs": [
			{
		  "acronym": "SAARC",
		  "name": "South Asian Association for Regional Cooperation",
		  "otherAcronyms": [],
		  "otherNames": [],
			},
	  ],
	  "cioc": "AFG",
	}
]
```

All of the types used are exported from the package as well (for TypeScript users **only**), and all responses will be of this format, with possibly more objects or none.

# Contact & Stuff
- All the credit for the data goes to [Restcountries](https://restcountries.eu)
- Need any help regarding the package? Contact me on Discord on tag `SpiderBro#8604`. I'll try to help as much as I can!
- For any suggestions or additions to the package, you can go to the linked GitHub Repository. For Issues, click [here](https://github.com/SpiderMath/Restcountries-Wrapper/issues) & for Pull Requests, click [here](https://github.com/SpiderMath/Restcountries-Wrapper/pulls)
- And **finally**, sorry for the 🗑 Version 1, I previously made (this might be trash too for all I know), I'd made that when I was just getting into TypeScript, so I messed up **big time**