import {createStore} from "redux";
import rootReducer from "../reducers"
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
    rootReducer,
    composeWithDevTools()
);
export default store;


//ana reducerdan bu sayfada store oluşturuyoruz, 




// aşağıdaki func redux dev tool kullanmak için npm.js sitesinden aldık
// const store = createStore(
//     reducer,
//     composeWithDevTools(
//       applyMiddleware(...middleware)
//       // other store enhancers if any
//     )
//   );