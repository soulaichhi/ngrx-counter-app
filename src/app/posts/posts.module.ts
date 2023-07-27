import {NgModule} from "@angular/core";
import {PostsRoutingModule} from "./posts-routing.module";
import {CommonModule} from "@angular/common";
import {PostsListComponent} from "./posts-list/posts-list.component";
import {AddPostComponent} from "./add-post/add-post.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [PostsListComponent,
    AddPostComponent,
    EditPostComponent],
  imports: [CommonModule, PostsRoutingModule, ReactiveFormsModule],
  exports: []
})
export class PostsModule {

}
