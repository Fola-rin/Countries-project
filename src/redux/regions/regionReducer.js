import {
	FETCH_REGION_FAILURE,
	FETCH_REGION_REQUEST,
	FETCH_REGION_SUCCESS,
} from "./regionActionTypes";

const initialState = {
	loading: false,
	data: {},
	error: "",
};

const regionReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case FETCH_REGION_REQUEST:
			return { ...state, loading: true };
		case FETCH_REGION_SUCCESS:
			return { loading: false, data: payload, error: "" };
		case FETCH_REGION_FAILURE:
			return { loading: false, data: {}, error: payload };
		default:
			return state;
	}
};

export default regionReducer;
