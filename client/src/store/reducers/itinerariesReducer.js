const initState = {
    itineraries: [],
    isLoaded: false,
    error: null
  };
  
  const itinerariesReducer = (state = initState, action) => {
      console.log(action.type)
    switch (action.type) {
      case "FETCH_ITINERARIES":
        return {
          ...state,
          itineraries: action.payload,
          isLoaded: true
        };
  
      default:
        return {
          ...state
        };
    }
  };
  
  export default itinerariesReducer;