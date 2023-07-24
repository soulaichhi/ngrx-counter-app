import {createAction, props} from "@ngrx/store";

export const increment = createAction(
  '[Counter Page] Increment counter'
);
export const decrement = createAction(
  '[Counter Page] Decrement Counter'
);
export const reset = createAction(
  '[Counter Page] Reset Counter'
);

export const customIncrement = createAction(
  '[Counter Page] Increment with custom value',
  props<{ count: number }>()
);
export const changeChannelName = createAction(
  '[Counter Page] Change the channel Name'
)
