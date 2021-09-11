import axios from "axios";
import {
	FETCH_ALL_COUNTRIES_FAILURE,
	FETCH_ALL_COUNTRIES_REQUEST,
	FETCH_ALL_COUNTRIES_SUCCESS,
} from "./allCountriesActionTypes";

export const fetchAllCountriesRequest = () => {
	return {
		type: FETCH_ALL_COUNTRIES_REQUEST,
	};
};

export const fetchAllCountriesSuccess = (data) => {
	return {
		type: FETCH_ALL_COUNTRIES_SUCCESS,
		payload: data,
	};
};
export const fetchAllCountriesFailure = (error) => {
	return {
		type: FETCH_ALL_COUNTRIES_FAILURE,
		payload: error,
	};
};
export const fetchAllCountries = () => {
	return (dispatch) => {
		dispatch(fetchAllCountriesRequest());
		axios
			.get(
				`https://restcountries.eu/rest/v2/all`
			)
			.then((response) => {
				dispatch(fetchAllCountriesSuccess(response.data));
			})
			.catch((error) => {
				const errorMsg = error.message;
				dispatch(fetchAllCountriesFailure(errorMsg));
			});
	};
};