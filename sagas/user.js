import {
    all,
    fork,
    call,
    takeLatest,
    put,
    delay,
} from "@redux-saga/core/effects";
//import axios from "axios";

// function logInAPI(data) {
//     return axios.post("/api/login", data);
// }

function* logIn(action) {
    try {
        //const result = yield call(logInAPI, action.data); //call에서는 logInAPI(action.data)를 이렇게 쓴다, 매개변수 여러개 사용하려면 action.data, a, b, c...
        yield delay(1000);
        yield put({
            // put은 dispatch 같은 것
            type: "LOG_IN_SUCCESS",
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: "LOG_IN_FAILURE",
            data: err.response.data,
        });
    }
}

// function logOutAPI() {
//     return axios.post("/api/logout");
// }

function* logOut() {
    try {
        //const result = yield call(logOutAPI);
        yield delay(1000);
        // put은 dispatch 같은 것
        yield put({
            type: "LOG_OUT_SUCCESS",
            //data: result.data,
        });
    } catch (err) {
        yield put({
            type: "LOG_OUT_FAILURE",
            data: err.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeLatest("LOG_IN_REQUEST", logIn);
}

function* watchLogOut() {
    yield takeLatest("LOG_OUT_REQUEST", logOut);
}

export default function* userSaga() {
    yield all([fork(watchLogIn), fork(watchLogOut)]);
}
