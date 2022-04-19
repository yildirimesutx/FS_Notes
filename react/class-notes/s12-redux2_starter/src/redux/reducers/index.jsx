import { combineReducers } from "redux";
// reducer ları birleştiriyor

import appReducer from "./appReducer"
import authReducer from "./authReducer"
import newsReducer from "./newsReducer"

// birleştirilen ana reducer a root reducer deniliyor

const rootReducer = combineReducers({
    app: appReducer,
    auth: authReducer,
    news : newsReducer,
});

export default rootReducer;


// birden fazla reducer olduğu için bir sayfada 3 reducer i combineReducers ile paylaşıyoruz