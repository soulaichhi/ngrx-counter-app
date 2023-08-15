import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { getPostById } from '../state/posts.selector';
import { Post } from '../../models/post.model';
import { Subscription } from 'rxjs';
import { updatePost } from '../state/posts.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  post!: Post | undefined;
  postForm!: FormGroup;
  postSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.postSubscription = this.store
        .select(getPostById, { id })
        .subscribe((data: Post | undefined) => {
          this.post = data;
          this.createForm();
        });
    });
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post?.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post?.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit() {
    if (this.postForm.invalid) {
      return;
    }
    const title = this.postForm.value.title;
    const description = this.postForm.value.description;
    //dispatch the Action
    const post: Post = {
      id: this.post?.id,
      title,
      description,
    };
    this.store.dispatch(updatePost({ post }));
    this.router.navigateByUrl('/posts');
  }

  showDescriptionErrors(): string | undefined {
    const description = this.postForm.get('description');
    if (description!.touched && description!.invalid) {
      if (description!.errors!['required']!) {
        return 'Description is required';
      }
      if (description!.errors?.['minlength']) {
        return 'Description should be minimum of 10 characters';
      }
    }
    return;
  }
}
