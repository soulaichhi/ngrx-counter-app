import {NgModule} from "@angular/core";
import {CounterRoutingModule} from "./counter-routing.module";
import {CommonModule} from "@angular/common";
import {CounterComponent} from "./counter/counter.component";
import {CounterOutputComponent} from "./counter-output/counter-output.component";
import {CounterButtonsComponent} from "./counter-buttons/counter-buttons.component";
import {CustomCounterInputComponent} from "./custom-counter-input/custom-counter-input.component";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./state/counter.reducer";

@NgModule({
  declarations: [CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent],
  imports: [CommonModule, CounterRoutingModule, FormsModule, StoreModule.forFeature('counter', counterReducer)],
  exports: []
})
export class CounterModule {

}
