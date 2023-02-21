const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpDate: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    },
};

export const loginAction = () => {
    return {
        type: "LOG_IN",
        data,
    };
};
export const logoutAction = () => {
    return {
        type: "LOG_IN",
    };
};

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

// (이전상태, 액션) => 다음상태를 만들어내는 함수가 reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN":
            return {
                ...state, //initialState다
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                },
            };
        case "LOG_OUT":
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                },
            };
        // 아래처럼 하면 참조관계가 유지돼서 히스토리가 안 남으므로 이렇게 하면 안된다!
        // case 'CHANGE_NICKNAME':
        // state.name = 'boogicho'
        // break;
    }
};

export default rootReducer;
