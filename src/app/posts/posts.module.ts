import {NgModule} from "@angular/core";
import {PostsRoutingModule} from "./posts-routing.module";
import {CommonModule} from "@angular/common";
import {PostsListComponent} from "./posts-list/posts-list.component";
import {AddPostComponent} from "./add-post/add-post.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {postsReducer} from "./state/posts.reducer";

@NgModule({
  declarations: [PostsListComponent,
    AddPostComponent,
    EditPostComponent],
  imports: [CommonModule, PostsRoutingModule, ReactiveFormsModule, StoreModule.forFeature('posts', postsReducer)],
  exports: []
})
export class PostsModule {

}
