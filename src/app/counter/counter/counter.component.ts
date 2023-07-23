import {Component} from '@angular/core';
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
// counter:number=0;
  constructor(private store: Store<{ counter: { counter: number } }>) {
  }

// onIncrement(){
//   this.counter++;
// }
//   onDecrement(){
//   this.counter--;
//   }
//   onReset(){
//   this.counter=0;
//   }
}
