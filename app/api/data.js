import axios from "axios";

const url = "https://books.iran.liara.run/books";

axios.defaults.headers.post["Content-Type"] = "application/json";

export default {
    get: axios.get,
    post: axios.post,
    url,
};
