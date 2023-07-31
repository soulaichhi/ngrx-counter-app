import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/app.state";
import {signUpStart} from "../state/auth.actions";
import {setLoadingSpinner} from "../../store/shared/shared.actions";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup<any>({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  onSignUpSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password;
    this.store.dispatch(setLoadingSpinner({status: true}));
    this.store.dispatch(signUpStart({email, password}));
  }
}
