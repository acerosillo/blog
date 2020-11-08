import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

//reducers must return any value besides "undifined"
export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
});
