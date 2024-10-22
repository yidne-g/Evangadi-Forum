import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: "https://evangadi-forum-qus2.onrender.com" + "/api",
});

export default axiosBaseURL;
export const axiosImageURL = "https://evangadi-forum-qus2.onrender.com";
