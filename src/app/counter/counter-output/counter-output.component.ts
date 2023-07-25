import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {Observable, Subscription} from "rxjs";
import {getCounter} from "../state/counters.selectors";
import {AppState} from "../../store/app.state";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  //@Input() counter!: number;
  counter$!: Observable<number>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {

    this.counter$ = this.store.select(getCounter);
  }


}
