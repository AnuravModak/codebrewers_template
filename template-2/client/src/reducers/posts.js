import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
  FETCH,
} from "../constants/actionTypes.js";

export default (posts = [], action) => {
  switch (action.type) {
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
