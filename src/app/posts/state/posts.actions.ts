import {createAction, props} from "@ngrx/store";
import {Post} from "../../models/post.model";

const ADD_POST_ACTION = '[Posts Page] add post'
const UPDATE_POST_ACTION = '[Posts Page] update post'
export const addPost = createAction(ADD_POST_ACTION,
  props<{ post: Post }>());
export const updatePost = createAction(UPDATE_POST_ACTION,
  props<{ post: Post }>())
