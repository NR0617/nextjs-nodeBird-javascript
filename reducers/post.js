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
                    src: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg",
                },
                {
                    src: "https://cdn.pixabay.com/photo/2023/01/22/13/46/swans-7736415_640.jpg",
                },
                {
                    src: "https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_640.jpg",
                },
            ],
            Comments: [
                {
                    User: {
                        nickname: "nero",
                    },
                    content: "우와 개정판이 나왔군요~",
                },
                {
                    User: {
                        nickname: "hero",
                    },
                    content: "얼른 사고 싶어요",
                },
            ],
        },
    ],
    ImagePaths: [],
    postAdded: false,
};

const ADD_POST_REQUEST = "ADD_POST_REQUEST"; //상수를 변수로 뺴주면 좋은점 -> 재활용 가능&오타방지
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

const dummyPost = {
    mainPosts: [
        {
            id: 2,
            User: {
                id: 1,
                nickname: "제로초",
            },
            content: "첫 번째 게시글 #해시태그 #익스프레스",
            Images: [
                {
                    src: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_640.jpg",
                },
                {
                    src: "https://cdn.pixabay.com/photo/2023/01/22/13/46/swans-7736415_640.jpg",
                },
                {
                    src: "https://cdn.pixabay.com/photo/2023/02/14/18/55/flowers-7790227_640.jpg",
                },
            ],
            Comments: [],
        },
    ],
    ImagePaths: [],
    postAdded: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REQUEST:
            return {
                ...state,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [...dummyPost.mainPosts, ...state.mainPosts],
                postAdded: true,
            };
        case ADD_POST_FAILURE:
            return {};
        default:
            return state;
    }
};

export default reducer;
