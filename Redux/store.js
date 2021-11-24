import { createStore, combineReducers, applyMiddleware } from "redux";
import { CounterReducer } from "./Reducers/CounterReducer";
import { AppReducer } from "./Reducers/AppReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  counter: CounterReducer,
  app: AppReducer,
});

const middleware = applyMiddleware(thunk);
const configureStore = () => {
  return createStore(rootReducer, middleware);
};

export default configureStore;
