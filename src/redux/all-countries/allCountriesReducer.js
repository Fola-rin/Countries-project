import {
	FETCH_ALL_COUNTRIES_FAILURE,
	FETCH_ALL_COUNTRIES_REQUEST,
	FETCH_ALL_COUNTRIES_SUCCESS,
} from "./allCountriesActionTypes";

const initialState = {
	loading: false,
	data: {},
	error: "",
};

const allCountriesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_ALL_COUNTRIES_REQUEST:
			return { ...state, loading: true };
		case FETCH_ALL_COUNTRIES_SUCCESS:
			return { loading: false, data: payload, error: "" };
		case FETCH_ALL_COUNTRIES_FAILURE:
			return { loading: false, data: {}, error: payload };
		default:
			return state;
	}
};
export default allCountriesReducer;
