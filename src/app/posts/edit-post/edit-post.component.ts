import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {getPostById} from "../state/posts.selector";
import {Post} from "../../models/post.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {
  post!: Post | undefined;
  postForm!: FormGroup;
  postSubscription!: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<AppState>) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.postSubscription = this.store.select(getPostById, {id}).subscribe((data: Post | undefined) => {
        this.post = data;
        this.createForm();
      })
    })

  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe()
    }
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post?.description, [Validators.required, Validators.minLength(10)])
    })
  }

  onUpdatePost() {

  }


}
