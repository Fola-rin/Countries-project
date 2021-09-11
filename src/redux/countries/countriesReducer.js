import {
	FETCH_COUNTRIES_FAILURE,
	FETCH_COUNTRIES_REQUEST,
	FETCH_COUNTRIES_SUCCESS,
} from "./countriesActionTypes";

const initialState = {
	loading: false,
	data: {},
	error: "",
};

const countriesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_COUNTRIES_REQUEST:
			return { ...state, loading: true };
		case FETCH_COUNTRIES_SUCCESS:
			return { loading: false, data: payload, error: "" };
		case FETCH_COUNTRIES_FAILURE:
			return { loading: false, data: {}, error: payload };
		default:
			return state;
	}
};

export default countriesReducer;
