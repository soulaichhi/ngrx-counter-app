import { createFeatureSelector, createSelector } from '@ngrx/store';
import { postsAdapter, PostsState } from './posts.state';
import { Post } from '../../models/post.model';
import { getCurrentRoute } from '../../store/router/router.selector';
import { RouterStateUrl } from '../../store/router/custom-serializer';

const getPostsState = createFeatureSelector<PostsState>('posts');

export const postsSelectors = postsAdapter.getSelectors();
export const getPosts = createSelector(getPostsState, postsSelectors.selectAll);
export const getPostEntities = createSelector(
  getPostsState,
  postsSelectors.selectEntities,
);
export const getPostById = createSelector(
  getPostEntities,
  getCurrentRoute,
  (posts, route: RouterStateUrl): Post | undefined => {
    return posts ? posts[route.params['id']] : undefined;
  },
);
