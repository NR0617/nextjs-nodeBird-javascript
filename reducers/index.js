import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import user from "./user";
import post from "./post";

// (이전상태, 액션) => 다음상태를 만들어내는 함수가 reducer
const rootReducer = combineReducers({
    //user, post는 initialState에 이름을 맞춰서 reducer를 넣은 것, index는 HYDRATE를 위해서 넣은 것(서버사이드렌더링)
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log("HYDRATE", action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

// 액션 만들기 -> 비효율적 -> 동적액션을 만들어 주자 -> 액션을 만들어주는 함수를 만들어주자
// const changeNickname1 = {
//     type: "CHANGE_NICKNAME",
//     data: "boogiecho",
// };
// const changeNickname2 = {
//     type: "CHANGE_NICKNAME",
//     data: "dolphin",
// };
// const changeNickname3 = {
//     type: "CHANGE_NICKNAME",
//     data: "helloworld",
// };

// async action creator -> redux-saga

//액션 만드는 함수 action creator
//changeNickname("boogiecho");

// 결과물
//{
// type: "CHANGE_NICKNAME",
// data: "boogiecho"
//}

//사용방법
//Store.dispatch(changeNickname('dolphin'))

// const changeNickname = (data) => {
//     return {
//         type: "CHANGE_NICKNAME",
//         data,
//     };
// };

export default rootReducer;
