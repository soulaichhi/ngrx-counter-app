import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {CounterState} from "../state/counter.state";
import {Observable} from "rxjs";

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit {
  //@Input() counter!: number;
  counter$!: Observable<{ counter: number }>;

  constructor(private store: Store<{ counter: CounterState }>) {
  }

  ngOnInit() {

    this.counter$ = this.store.select('counter');
  }
  
}
