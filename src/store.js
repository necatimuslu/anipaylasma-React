import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import momentReducer from "./reducers/momentReducer";
import userReducer from "./reducers/userReducer";

const reducers = combineReducers({
  moments: momentReducer,
  user: userReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
