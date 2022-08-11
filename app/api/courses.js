import http from "./data";

export const fetchCourses = async () => {
  try {
    const {
      data: { book },
    } = await http.get(`${http.url}`);
    return book;
  } catch (err) {
    console.log(err);
  }
};
