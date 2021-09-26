import axios from "axios";
import {
	FETCH_BORDER_FAILURE,
	FETCH_BORDER_REQUEST,
	FETCH_BORDER_SUCCESS,
} from "./borderActionTypes";

export const fetchBorderRequest = () => {
	return {
		type: FETCH_BORDER_REQUEST,
	};
};

export const fetchBorderSuccess = (data) => {
	return {
		type: FETCH_BORDER_SUCCESS,
		payload: data,
	};
};
export const fetchBorderFailure = (error) => {
	return {
		type: FETCH_BORDER_FAILURE,
		payload: error,
	};
};
export const fetchBorder = (code) => {
	return (dispatch) => {
		dispatch(fetchBorderRequest());
		axios
			.all(
				code &&
					code.map((code) =>
						axios.get(`https://restcountries.com/v2/alpha/${code}`)
					)
			)

			.then((response) => {
				const newArray = [];
				response.forEach((response) => {
					// console.log(response.data);
					newArray.push(response.data);
				});
				dispatch(fetchBorderSuccess(newArray));
			})
			.catch((error) => {
				console.log(error.message);
				const errorMsg = error.message;
				dispatch(fetchBorderFailure(errorMsg));
			});
	};
};
