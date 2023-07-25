import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../models/post.model";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  ngOnInit() {
    this.postForm = new FormGroup<any>({
      title: new FormControl('', [Validators.required, Validators.minLength(6)]),
      description: new FormControl('', [Validators.required, Validators.minLength(10)])
    })
  }

  onAddPost() {
    if (this.postForm.invalid) {
      return;
    }
    console.log(this.postForm.value)
  }

  showDescriptionErrors(): string | undefined {
    const description = this.postForm.get('description');
    if (description!.touched && description!.invalid) {
      if (description!.errors!['required']!) {
        return "Description is required"
      }
      if (description!.errors?.['minlength']) {
        return "Description should be minimum of 10 characters"
      }
    }
    return;
  }
}
