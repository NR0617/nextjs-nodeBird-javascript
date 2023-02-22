import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";

const configureStore = () => {
    const middlewares = [];
    const enhancer =
        process.env.NODE_ENV === "production"
            ? compose(applyMiddleware(...middlewares)) //배포용
            : composeWithDevTools(applyMiddleware(...middlewares)); //개발용,히스토리쌓는용, 배열은 saga나 thunk를 위해서 제작
    const store = createStore(reducer, enhancer);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === "development",
});

export default wrapper;
