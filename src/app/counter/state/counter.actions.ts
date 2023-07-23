import {createAction} from "@ngrx/store";

export const increment = createAction(
  '[Counter Page] Increment counter'
);
export const decrement = createAction(
  '[Counter Page] Decrement Counter'
);
export const reset = createAction(
  '[Counter Page] Reset Counter'
)
