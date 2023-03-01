import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import rootSaga from "../sagas";

//미들웨어 만들기 실습
const loggerMiddleware =
    ({ dispatch, getState }) =>
    (next) =>
    (action) => {
        console.log(action);
        // if (typeof action === "function") {
        //     return action(dispatch, getState);
        // }
        return next(action);
    };

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware, loggerMiddleware];
    const enhancer =
        process.env.NODE_ENV === "production"
            ? compose(applyMiddleware(...middlewares)) //배포용
            : composeWithDevTools(applyMiddleware(...middlewares)); //개발용,히스토리쌓는용, 배열은 saga나 thunk를 위해서 제작
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === "development",
});

export default wrapper;
