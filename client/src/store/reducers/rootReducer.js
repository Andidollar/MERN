import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer"
import loginReducer from "./loginReducer"
import registerReducer from "./registerReducer"
const rootReducer = combineReducers({cities: citiesReducer, itineraries: itinerariesReducer, login: loginReducer, register: registerReducer});
export default rootReducer;