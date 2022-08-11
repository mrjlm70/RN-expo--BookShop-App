import { combineReducers } from "redux";
import { coursesReducer } from "./coursesReducer";
import { usersReducer } from "./usersReducer";

export const reducers = combineReducers({
    courses: coursesReducer,
    user: usersReducer,
});
