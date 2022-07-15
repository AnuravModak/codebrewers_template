import axios from "axios";

const url = "http://localhost:4000/add";

export const createPost = (newPost) => axios.post(url, newPost);
