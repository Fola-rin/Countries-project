import { combineReducers } from "redux";
import countriesReducer from "./countries/countriesReducer";
import countryReducer from "./country/countryReducer";
import regionReducer from "./regions/regionReducer";
import allCountriesReducer from "./all-countries/allCountriesReducer";
import borderReducer from "./borders/borderReducer";

const rootReducer = combineReducers({
	allCountries: allCountriesReducer,
	countries: countriesReducer,
	country: countryReducer,
	region: regionReducer,
	borders: borderReducer,
});

export default rootReducer;
