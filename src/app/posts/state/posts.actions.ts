import {createAction, props} from "@ngrx/store";
import {Post} from "../../models/post.model";

const ADD_POST_ACTION = '[Posts Page] add post';
const UPDATE_POST_ACTION = '[Posts Page] update post';
const DELETE_POST_ACTION = '[Posts Page] delete post';
const LOAD_POSTS = '[Posts Page] load posts API';
const LOAD_POSTS_SUCCESS = '[Posts Page] load posts success';
export const addPost = createAction(ADD_POST_ACTION,
  props<{ post: Post }>());
export const updatePost = createAction(UPDATE_POST_ACTION,
  props<{ post: Post }>());
export const deletePost = createAction(DELETE_POST_ACTION,
  props<{ id: string | undefined }>())

export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(LOAD_POSTS_SUCCESS, props<{ posts: Post[] }>())
