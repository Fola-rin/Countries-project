import {
	FETCH_COUNTRY_FAILURE,
	FETCH_COUNTRY_REQUEST,
	FETCH_COUNTRY_SUCCESS,
} from "./countryActionTypes";

const initialState = {
	loading: false,
	data: {},
	error: "",
};

const countryReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_COUNTRY_REQUEST:
			return { ...state, loading: true };
		case FETCH_COUNTRY_SUCCESS:
			return { loading: false, data: payload, error: "" };
		case FETCH_COUNTRY_FAILURE:
			return { loading: false, data: {}, error: payload };
		default:
			return state;
	}
};
export default countryReducer;
