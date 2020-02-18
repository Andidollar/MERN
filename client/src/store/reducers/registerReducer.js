const initState = {
    picture: '',
    username: '',
    email: '',
    password: '',
    isRegistered: false,
    isError: false,
    error: false
};

const registerReducer = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
        case "REGISTER_SUCCESS":
            return {
                ...state,
                isRegistered: action.isRegistered,
                    error: action.error
            };
        case "REGISTER_FAIL":
            return {
                ...state,
                isRegistered: action.isRegistered,
                    message: action.message,
                    error: action.error
            };
        default:
            return {
                ...state
            };
    }
};

export default registerReducer;