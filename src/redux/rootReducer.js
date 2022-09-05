import { combineReducers } from "redux";
import filtersReducer from "./filters/reducer";
import toDoReducer from "./todos/reducer";


const rootReducer = combineReducers({
    toDos: toDoReducer,
    filters: filtersReducer
});


export default rootReducer;