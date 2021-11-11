import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import reducer from "../reducers";

export default function configureStore() { 
    const middlewares = applyMiddleware(thunkMiddleware);
    const store = createStore(reducer,middlewares);
    return store;
};