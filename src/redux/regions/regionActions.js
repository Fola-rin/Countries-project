import axios from "axios";
import {
	FETCH_REGION_FAILURE,
	FETCH_REGION_REQUEST,
	FETCH_REGION_SUCCESS,
} from "./regionActionTypes";

export const fetchRegionRequest = () => {
	return {
		type: FETCH_REGION_REQUEST,
	};
};

export const fetchRegionSuccess = (data) => {
	return {
		type: FETCH_REGION_SUCCESS,
		payload: data,
	};
};
export const fetchRegionFailure = (error) => {
	return {
		type: FETCH_REGION_FAILURE,
		payload: error,
	};
};

export const fetchRegion = (region) => {
	return (dispatch) => {
		dispatch(fetchRegionRequest());
		axios
			.get(`https://restcountries.com/v2/continent/${region}`)
			.then((response) => {
				dispatch(fetchRegionSuccess(response.data));
			})
			.catch((error) => {
				console.log(error.message);
				const errorMsg = error.message;
				dispatch(fetchRegionFailure(errorMsg));
			});
	};
};
