import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {PostsService} from "../../services/posts.service";
import {addPost, addPostSuccess, loadPosts, loadPostsSuccess} from "./posts.actions";
import {map, mergeMap} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),

      mergeMap((action) => {

        return this.postsService.getPosts().pipe(map((posts) => {
          return this.store.dispatch(loadPostsSuccess({posts}))
        }))

      })
    )
  }, {dispatch: false})

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap(action => {
        return this.postsService.addPost(action.post).pipe(map(data => {
          const post = {...action.post, id: data.name};
          return addPostSuccess({post})
        }))
      })
    )
  })


  constructor(private actions$: Actions, private postsService: PostsService, private store: Store<AppState>) {
  }
}
