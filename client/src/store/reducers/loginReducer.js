const initState = {
    userEmail: "",
    isLoggedIn: false,
    isError: false,
    error: false,
    isLoaded: false
};

const loginReducer = (state = initState, action) => {
    console.log(action.type)
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                    error: action.error,
                    userEmail: action.userEmail
            };
        case "LOGIN_FAIL":
            return {
                ...state,
                isLoggedIn: action.isLoggedIn,
                    error: action.error,
                    userEmail: action.userEmail
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