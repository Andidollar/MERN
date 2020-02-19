const initState = {
    message: "",
    userEmail: "",
    isLoggedIn: false,
    isError: false,
    error: false,
    isLoaded: false,
    token: '',
    username: ''
};

const loginReducer = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                    error: action.error,
                    username: action.username,
                    _id: action._id,
                    token: action.token
            };
        case "LOGIN_FAIL":
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                    userEmail: action.userEmail,
                    message: action.message,
                    error: action.error
            };
        case "LOG_OUT":
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                    error: action.error,
                    userEmail: action.userEmail
            };
        default:
            return {
                ...state
            };
    }
};


export default loginReducer;