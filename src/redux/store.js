import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./rootReducer";

const store = createStore(
	reducer,
	// composeWithDevTools(applyMiddleware(logger, thunk))
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
