import {NgModule} from "@angular/core";
import {PostsRoutingModule} from "./posts-routing.module";
import {CommonModule} from "@angular/common";
import {PostsListComponent} from "./posts-list/posts-list.component";
import {AddPostComponent} from "./add-post/add-post.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {postsReducer} from "./state/posts.reducer";
import {EffectsModule} from "@ngrx/effects";
import {PostsEffects} from "./state/posts.effects";

@NgModule({
  declarations: [PostsListComponent,
    AddPostComponent,
    EditPostComponent],
  imports: [CommonModule,
    PostsRoutingModule, ReactiveFormsModule,
    StoreModule.forFeature('posts', postsReducer),
    EffectsModule.forFeature([PostsEffects])],
  exports: []
})
export class PostsModule {

}
