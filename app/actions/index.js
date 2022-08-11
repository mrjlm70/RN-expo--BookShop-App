import { fetchCourses } from "../api/courses";

export const getCourses = () => {
    return async (dispatch) => {
        const courses = await fetchCourses();
        await dispatch({ type: "INIT", payload: courses });
    };
};

export const userAction = (user) => {
    return async (dispatch) => {
        await dispatch({ type: "USER", payload: user });
    };
};
