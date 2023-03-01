export const initialState = {
    isLoggingIn: false, //로그인 시도중
    isLoggedIn: false,
    isLoggingOut: false, //로그아웃 시도중
    me: null,
    signUpDate: {},
    loginData: {},
};

export const loginRequestAction = (data) => {
    return {
        type: "LOG_IN_REQUEST",
        data,
    };
};
export const logoutRequestAction = () => {
    return {
        type: "LOG_OUT_REQUEST",
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN_REQUEST":
            return {
                ...state, //initialState다
                isLoggingIn: true, // 진짜 내가 바꾸고 싶은 부분
            };
        case "LOG_IN_SUCCESS":
            return {
                ...state, //initialState다
                isLoggingIn: false, // 진짜 내가 바꾸고 싶은 부분
                isLoggedIn: true,
                me: { ...action.data, nickname: "zerocho" }, //진짜 내가 바꾸고 싶은 부분
            };
        case "LOG_IN_FAILURE":
            return {
                ...state, //initialState다
                isLoggingIn: false, // 진짜 내가 바꾸고 싶은 부분
            };
        case "LOG_OUT_REQUEST":
            return {
                ...state,
                isLoggingOut: true,
            };
        case "LOG_OUT_SUCCESS":
            return {
                ...state,
                isLoggingOut: false,
                isLoggedIn: false,
                me: null,
            };
        case "LOG_OUT_FAILURE":
            return {
                ...state,
                isLoggingOut: false,
            };
        default:
            return state;
    }
};

export default reducer;
