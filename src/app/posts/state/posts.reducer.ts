import { Action, createReducer, on } from '@ngrx/store';
import { initialState, postsAdapter } from './posts.state';
import {
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPostsSuccess,
  updatePost,
  updatePostSuccess,
} from './posts.actions';

const _postsReducer = createReducer(
  initialState,
  on(addPostSuccess, (state, action) => {
    return postsAdapter.addOne(action.post, state);
  }),
  on(updatePostSuccess, (state, action) => {
    return postsAdapter.updateOne(action.post, state);
  }),
  on(deletePostSuccess, (state, { id }) => {
    return postsAdapter.removeOne(id, state);
  }),
  on(loadPostsSuccess, (state, action) => {
    return postsAdapter.setAll(action.posts, state);
  }),
);

export function postsReducer(state: any, action: Action) {
  return _postsReducer(state, action);
}
