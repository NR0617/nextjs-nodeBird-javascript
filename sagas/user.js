import {
    all,
    fork,
    call,
    takeLatest,
    put,
    delay,
} from "@redux-saga/core/effects";
import {
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_SUCCESS,
    SIGN_UP_REQUEST,
} from "../reducers/user";
//import axios from "axios";

// function logInAPI(data) {
//     return axios.post("/api/login", data);
// }

function* logIn(action) {
    try {
        console.log("saga action");
        //const result = yield call(logInAPI, action.data); //call에서는 logInAPI(action.data)를 이렇게 쓴다, 매개변수 여러개 사용하려면 action.data, a, b, c...
        yield delay(1000);
        yield put({
            // put은 dispatch 같은 것
            type: LOG_IN_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
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
            type: LOG_OUT_SUCCESS,
            //data: result.data,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

// function signUpAPI(data) {
//     return axios.post("/api/signUp", data);
// }

function* signUp(action) {
    try {
        //const result = yield call(signUpAPI, action.data);
        yield delay(1000);
        yield put({
            // put은 dispatch 같은 것
            type: SIGN_UP_SUCCESS,
            //data: action.data,
        });
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchLogIn() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}
export default function* userSaga() {
    yield all([fork(watchLogIn), fork(watchLogOut), fork(watchSignUp)]);
}
