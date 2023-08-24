import { createAction, props } from '@ngrx/store';
import { Post } from '../../models/post.model';
import { Update } from '@ngrx/entity';

const ADD_POST_ACTION = '[Posts Page] add post';
const ADD_POST_SUCCESS = '[Posts Page] add post success';
const UPDATE_POST_ACTION = '[Posts Page] update post';
const UPDATE_POST_ACTION_SUCCESS = '[Posts Page] update post success';

const DELETE_POST_ACTION = '[Posts Page] delete post';
const DELETE_POST_SUCCESS = '[Posts Page] delete post success';

const LOAD_POSTS = '[Posts Page] load posts API';
const LOAD_POSTS_SUCCESS = '[Posts Page] load posts success';
export const addPost = createAction(ADD_POST_ACTION, props<{ post: Post }>());
export const addPostSuccess = createAction(
  ADD_POST_SUCCESS,
  props<{ post: Post }>(),
);
export const updatePost = createAction(
  UPDATE_POST_ACTION,
  props<{ post: Post }>(),
);
export const updatePostSuccess = createAction(
  UPDATE_POST_ACTION_SUCCESS,
  props<{ post: Update<Post> }>(),
);
export const deletePost = createAction(
  DELETE_POST_ACTION,
  props<{ id: string | undefined }>(),
);
export const deletePostSuccess = createAction(
  DELETE_POST_SUCCESS,
  props<{ id: string }>(),
);

export const loadPosts = createAction(LOAD_POSTS);
export const loadPostsSuccess = createAction(
  LOAD_POSTS_SUCCESS,
  props<{ posts: Post[] }>(),
);
