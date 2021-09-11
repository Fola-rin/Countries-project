import {
	FETCH_BORDER_FAILURE,
	FETCH_BORDER_REQUEST,
	FETCH_BORDER_SUCCESS,
} from "./borderActionTypes";

const initialState = {
	loading: false,
	data: {},
	error: "",
};

const countryReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_BORDER_REQUEST:
			return { ...state, loading: true };
		case FETCH_BORDER_SUCCESS:
			return { loading: false, data: payload, error: "" };
		case FETCH_BORDER_FAILURE:
			return { loading: false, data: {}, error: payload };
		default:
			return state;
	}
};
export default countryReducer;
