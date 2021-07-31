import { combineReducers } from "redux";
import filtersReducer from "./filters/filtersSlice";
import todosReducer from "./todos/todosSlice";

const rootReducer=combineReducers({
   
todos:todosReducer,
filters:filtersReducer
    
})
export default rootReducer;