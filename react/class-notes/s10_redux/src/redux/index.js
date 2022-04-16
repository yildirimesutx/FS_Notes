import { createStore, combineReducers } from "redux";
import counterReducer from "./reducer/counterReducer";

const reducers = combineReducers({
  counterReducer: counterReducer,
//   todoReducer : todoReducer
});

export const combinedStores = () => {
  const store = createStore(reducers);
  return store;
};

