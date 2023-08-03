import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {Observable} from "rxjs";
import {Post} from "../../models/post.model";
import {getPosts} from "../state/posts.selector";
import {deletePost, loadPosts} from "../state/posts.actions";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    this.posts$ = this.store.select(getPosts);
    this.store.dispatch(loadPosts());


  }

  onDeletePost(id: string | undefined) {
    if (confirm("Are you Sure")) {
      this.store.dispatch(deletePost({id}))
    }
  }
}
