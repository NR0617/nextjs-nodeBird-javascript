import {
    all,
    fork,
    call,
    takeLatest,
    put,
    delay,
} from "@redux-saga/core/effects";
//import axios from "axios";

// function addPostAPI(data) {
//     return axios.post("/api/post", data);
// }

function* addPost(action) {
    try {
        //const result = yield call(addPostAPI, action.data);
        yield delay(1000);
        yield put({
            // put은 dispatch 같은 것
            type: "ADD_POST_SUCCESS",
            //data: result.data,
        });
    } catch (err) {
        yield put({
            type: "ADD_POST_FAILURE",
            data: err.response.data,
        });
    }
}

function* watchAddPost() {
    yield takeLatest("ADD_POST_REQUEST", addPost);
}

export default function* postSaga() {
    yield all([fork(watchAddPost)]);
}
