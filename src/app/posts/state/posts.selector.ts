import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';
import { Post } from '../../models/post.model';
import { getCurrentRoute } from '../../store/router/router.selector';
import { RouterStateUrl } from '../../store/router/custom-serializer';

const getPostsState = createFeatureSelector<PostsState>('posts');
export const getPosts = createSelector(getPostsState, (state) => {
  return state.posts;
});

export const getPostById = createSelector(
  getPosts,
  getCurrentRoute,
  (posts, route: RouterStateUrl): Post | undefined => {
    return posts?.find((post: Post) => post.id === route.params['id']);
  },
);
