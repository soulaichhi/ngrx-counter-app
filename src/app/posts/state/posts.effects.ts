import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {PostsService} from "../../services/posts.service";
import {loadPosts, loadPostsSuccess} from "./posts.actions";
import {map, mergeMap, withLatestFrom} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {getPosts} from "./posts.selector";

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      withLatestFrom(this.store.select(getPosts)),
      mergeMap((action) => {

        return this.postsService.getPosts().pipe(map((posts) => {
          return this.store.dispatch(loadPostsSuccess({posts}))
        }))

      })
    )
  }, {dispatch: false})


  constructor(private actions$: Actions, private postsService: PostsService, private store: Store<AppState>) {
  }
}
