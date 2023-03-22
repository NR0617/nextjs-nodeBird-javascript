import shortid from "shortid";

export const initialState = {
    mainPosts: [
        {
            id: 1,
            User: {
                id: 1,
                nickname: "제로초",
            },
            content: "첫 번째 게시글 #해시태그 #익스프레스",
            Images: [
                {
                    id: shortid.generate(),
                    src: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg",
                },
                {
                    id: shortid.generate(),
                    src: "https://cdn.pixabay.com/photo/2023/01/22/13/46/swans-7736415_640.jpg",
                },
                {
                    id: shortid.generate(),
                    src: "https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_640.jpg",
                },
            ],
            Comments: [
                {
                    id: shortid.generate(),
                    User: {
                        id: shortid.generate(),
                        nickname: "nero",
                    },
                    content: "우와 개정판이 나왔군요~",
                },
                {
                    id: shortid.generate(),
                    User: {
                        id: shortid.generate(),
                        nickname: "hero",
                    },
                    content: "얼른 사고 싶어요",
                },
            ],
        },
    ],
    ImagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
};

export const ADD_POST_REQUEST = "ADD_POST_REQUEST"; //상수를 변수로 뺴주면 좋은점 -> 재활용 가능&오타방지
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ({
    id: data.id,
    User: {
        id: 1,
        nickname: "제로초",
    },
    content: data.content,
    Images: [],
    Comments: [],
});
const dummyComment = (data) => ({
    id: shortid.generate(),
    content: data,
    User: {
        id: 1,
        nickname: "제로초",
    },
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost(action.data), ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true,
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            };
        case REMOVE_POST_REQUEST:
            return {
                ...state,
                removePostLoading: true,
                removePostDone: false,
                removePostError: null,
            };
        case REMOVE_POST_SUCCESS:
            return {
                ...state,
                mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
                removePostLoading: false,
                removePostDone: true,
            };
            1;
        case REMOVE_POST_FAILURE:
            return {
                ...state,
                removePostLoading: false,
                removePostError: action.error,
            };
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                adCommenttError: null,
            };
        case ADD_COMMENT_SUCCESS: {
            const postIndex = state.mainPosts.findIndex(
                (v) => v.id === action.data.postId
            );
            const post = { ...state.mainPosts[postIndex] };
            post.Comments = [
                dummyComment(action.data.content),
                ...post.Comments,
            ];
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = post;
            return {
                ...state,
                mainPosts,
                addCommentLoading: false,
                addCommentDone: true,
            };
        }
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading: false,
                addCommentError: action.error,
            };
        case ADD_POST_FAILURE:
            return {};
        default:
            return state;
    }
};

export default reducer;
