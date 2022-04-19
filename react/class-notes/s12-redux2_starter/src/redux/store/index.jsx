import {createStore, applyMiddleware} from "redux";
import rootReducer from "../reducers"
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk"

let store;
if (process.env.NODE_ENV === "development"){
  store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
}else{
 store = createStore(rootReducer, applyMiddleware(thunk))
}

export default store;

//  yukarıdakı ifadeyi redux tool deploy edilince gözükmemesi için yaptık
//ana reducerdan bu sayfada store oluşturuyoruz, 




// aşağıdaki func redux dev tool kullanmak için npm.js sitesinden aldık
// const store = createStore(
//     reducer,
//     composeWithDevTools(
//       applyMiddleware(...middleware)
//       // other store enhancers if any
//     )
//   );