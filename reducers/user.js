import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from "./post";
export const initialState = {
    logInLoading: false, //로그인 시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false, //로그아웃 시도중
    logOutDone: false,
    logOutError: null,
    signUpLoading: false, //회원가입 시도중
    signUpDone: false,
    signUpError: null,
    logInLoading: false, //로그인 시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false, //로그아웃 시도중
    logOutDone: false,
    logOutError: null,
    signUpLoading: false, //회원가입 시도중
    signUpDone: false,
    signUpError: null,
    changeNicknameLoading: false, //닉네임 변경 시도중
    changeNicknameDone: false,
    changeNicknameError: null,
    me: null,
    signUpDate: {},
    loginData: {},
};
// 오타에 취약하니까 변수로 만들자
export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
export const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
export const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";

export const FOLLOW_REQUEST = "FOLLOW_REQUEST";
export const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
export const FOLLOW_FAILURE = "FOLLOW_FAILURE";

export const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
export const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
export const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";

const dummyUser = (data) => ({
    ...data, //email, password가 들어있다
    nickname: "제로초",
    id: 1,
    Posts: [{ id: 1 }],
    Followings: [
        { nickname: "부기초" },
        { nickname: "Chanho Lee" },
        { nickname: "neue zeal" },
    ],
    Followers: [
        { nickname: "부기초" },
        { nickname: "Chanho Lee" },
        { nickname: "neue zeal" },
    ],
});

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        type: LOG_IN_REQUEST,
        data,
    };
};
export const logoutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST,
        type: LOG_OUT_REQUEST,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            return {
                ...state, //initialState다
                logInLoading: true, // 진짜 내가 바꾸고 싶은 부분
                logInError: null,
                logInDone: false,
            };
        case LOG_IN_SUCCESS:
            return {
                ...state, //initialState다
                logInLoading: false, // 진짜 내가 바꾸고 싶은 부분
                logInDone: true,
                me: dummyUser(action.data), //진짜 내가 바꾸고 싶은 부분
            };
        case LOG_IN_FAILURE:
            return {
                ...state, //initialState다
                logInLoading: false, // 진짜 내가 바꾸고 싶은 부분
                logInError: action.error,
            };
        case LOG_OUT_REQUEST:
            return {
                ...state,
                logOutLoading: true,
                logInDone: false,
                logOutError: null,
            };
        case LOG_OUT_SUCCESS:
            return {
                ...state,
                logOutLoading: false,
                logInDone: true,
                logInDone: false,
                me: null,
            };
        case LOG_OUT_FAILURE:
            return {
                ...state,
                logOutLoading: false,
                logOutError: action.error,
            };
        case SIGN_UP_REQUEST:
            return {
                ...state,
                signUpLoading: true,
                signUpDone: false,
                signUptError: null,
            };
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpLoading: false,
                signUpDone: true,
            };
        case SIGN_UP_FAILURE:
            return {
                ...state,
                signUpLoading: false,
                signUpError: action.error,
            };
        case CHANGE_NICKNAME_REQUEST:
            return {
                ...state,
                changeNicknameLoading: true,
                changeNicknameDone: false,
                changeNicknametError: null,
            };
        case CHANGE_NICKNAME_SUCCESS:
            return {
                ...state,
                changeNicknameLoading: false,
                changeNicknameDone: true,
            };
        case CHANGE_NICKNAME_FAILURE:
            return {
                ...state,
                changeNicknameLoading: false,
                changeNicknameError: action.error,
            };
        case ADD_POST_TO_ME:
            return {
                ...state,
                me: {
                    ...state.me,
                    Posts: [{ id: action.data }, ...state.me.Posts],
                },
            };
        case REMOVE_POST_OF_ME:
            return {
                ...state,
                me: {
                    ...state.me,
                    Posts: state.me.Posts.filter((v) => v.id !== action.data),
                },
            };
        default:
            return state;
    }
};

export default reducer;
