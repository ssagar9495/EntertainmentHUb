import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const allReducer = combineReducers({
  //here i will set all the reducer
});

const intialState = {};

const middleware = [thunk];

const store = createStore(
  allReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
