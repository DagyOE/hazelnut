import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./reducers/authReducer.jsx";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
