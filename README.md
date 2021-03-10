# Countries API

### 👋 Welcome to the Documentation for the NPM Package: `restcountries-wrapper`. I've *tried* to make this as easy and useful as possible but if there are any problems, feel free to make an Issue in the GitHub Repository<br/><br/>

## **Get Started**<hr>

### **Installing the package**
```sh
$npm install restcountries-wrapper
```

### **Importing the package**
### *Node.js*
```js
const Wrapper = require('restcountries-wrapper');

const wrapper = Wrapper.RestCountriesWrapper;
```
### *ES 6*
```js
import { RestCountriesWrapper } from 'restcountries-wrapper';
```

### **Methods**

> #### ℹ️ It is suggested that you maintain a cache of the data since if you use the API too heavily it might make the API slower. Also having a cache is helpful since it lowers your wait time

* #### **allCountries**: Returns all the country data in the database in one sweep
* #### **getCountryByName**
	- Parameters: 
		1. *name*: string, required<br>Name of the country
		2. *fullText*: boolean<br>Whether the input name is the full name of the country or not
* #### **getCountryByISOCode**
	- Parameters:
		1. *code*: string, ISO Code of the Country
	- Gets the country by its ISO Code
* #### **getCountriesByISOCodes**
	- Parameters:
		1. *codes*: string[], ISO Codes of the country you wanna search for
	- Gets multiple countries by ISO Code
* #### **getCountryByCurrencyCode**
	- Parameters:
		1. *code*: string, Currency code of the country for which you wanna look for
	- Gets a country by looking at its currency code
* #### **getCountryByCapital**
	- Parameters:
		1. *capital*: string, Name of the capital of the country
	- Gets a country by looking at its capital
* #### **getCountriesByLanguage**
	- Parameters:
		1. *code*: The ISO Code of the langauge
	- Gets all the countries who have a particular language as their official language(s)
* #### **getCountryByCallingCode**
	- Parameters:
		1. *code*: Calling code of the Country(without the +)
	- Gets the country by its calling code (cool isn't it?)
* #### **getCountriesByRegion**
	- Parameters: 
		1. *region*: Can be either 'africa' or 'americas' or 'asia' or 'europe' or 'oceania'
	- Gets all the countries in the specified region
* #### **getCountriesRegionalBloc**
	- Parameters:
		1. *bloc*: Can be either 'eu' or 'efta' or 'caricom' or 'pa' or 'au' or 'usan' or 'eeu' or 'al' or 'asean' or 'cais' or 'cefta' or 'nafta' or 'saarc'
	- Gets all the countries in a Regional Bloc
