import axios from "axios";
import {
	FETCH_COUNTRIES_FAILURE,
	FETCH_COUNTRIES_REQUEST,
	FETCH_COUNTRIES_SUCCESS,
} from "./countriesActionTypes";

export const fetchCountriesRequest = () => {
	return {
		type: FETCH_COUNTRIES_REQUEST,
	};
};

export const fetchCountriesSuccess = (data) => {
	return {
		type: FETCH_COUNTRIES_SUCCESS,
		payload: data,
	};
};
export const fetchCountriesFailure = (error) => {
	return {
		type: FETCH_COUNTRIES_FAILURE,
		payload: error,
	};
};
export const fetchCountries = (name) => {
	return (dispatch) => {
		dispatch(fetchCountriesRequest());
		axios
			.get(`https://restcountries.com/v2/name/${name}`)
			.then((response) => {
				dispatch(fetchCountriesSuccess(response.data));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchCountriesFailure(errorMsg));
			});
	};
};
