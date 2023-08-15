import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import {
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPosts,
  loadPostsSuccess,
  updatePost,
  updatePostSuccess,
} from './posts.actions';
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loadPosts),

        mergeMap((action) => {
          return this.postsService.getPosts().pipe(
            map((posts) => {
              return this.store.dispatch(loadPostsSuccess({ posts }));
            }),
          );
        }),
      );
    },
    { dispatch: false },
  );

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postsService.addPost(action.post).pipe(
          map((data) => {
            const post = { ...action.post, id: data.name };
            return addPostSuccess({ post });
          }),
        );
      }),
    );
  });
  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        return this.postsService.updatePost(action.post).pipe(
          map(() => {
            return updatePostSuccess({ post: action.post });
          }),
        );
      }),
    );
  });
  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePost),
      switchMap((action) => {
        return this.postsService.deletePost(action.id!).pipe(
          map(() => {
            return deletePostSuccess({ id: action.id! });
          }),
        );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private postsService: PostsService,
    private store: Store<AppState>,
  ) {}
}
