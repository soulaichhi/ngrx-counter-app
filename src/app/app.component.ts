import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "./store/app.state";
import {getErrorMessage, getLoading} from "./store/shared/shared.selector";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showLoading!: Observable<boolean>;
  errorMessage!: Observable<string>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.showLoading = this.store.select(getLoading);
    this.errorMessage = this.store.select(getErrorMessage);
  }
}
