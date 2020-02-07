const initState = {
    cities: [],
    isLoaded: false,
    error: null
  };
  
  const citiesReducer = (state = initState, action) => {
      console.log(action.type)
    switch (action.type) {
      case "FETCH_ALL":
        return {
          ...state,
          cities: action.payload,
          isLoaded: true
        };
  
      default:
        return {
          ...state
        };
    }
  };
  
  export default citiesReducer;