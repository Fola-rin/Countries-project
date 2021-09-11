import axios from "axios";
import {
	FETCH_COUNTRY_FAILURE,
	FETCH_COUNTRY_REQUEST,
	FETCH_COUNTRY_SUCCESS,
} from "./countryActionTypes";

export const fetchCountryRequest = () => {
	return {
		type: FETCH_COUNTRY_REQUEST,
	};
};

export const fetchCountrySuccess = (data) => {
	return {
		type: FETCH_COUNTRY_SUCCESS,
		payload: data,
	};
};
export const fetchCountryFailure = (error) => {
	return {
		type: FETCH_COUNTRY_FAILURE,
		payload: error,
	};
};
export const fetchCountry = (name) => {
	return (dispatch) => {
		dispatch(fetchCountryRequest());
		axios
			.get(
				`https://restcountries.eu/rest/v2/name/${name}?fullText=true`
			)
			.then((response) => {
				dispatch(fetchCountrySuccess(response.data));
			})
			.catch((error) => {
				console.log(error.message);
				const errorMsg = error.message;
				dispatch(fetchCountryFailure(errorMsg));
			});
	};
};


