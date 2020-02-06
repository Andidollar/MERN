const initState = {
    cities: [],
    isLoaded: false,
    error: null
  };
  
  const citiesReducer = (state = initState, action) => {
    switch (action.type) {
      case "FETCH_ALL":
        return {
          ...state,
          cities: action.payload
        };
  
      default:
        return {
          ...state
        };
    }
  };
  
  export default citiesReducer;