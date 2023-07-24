import {Action, createReducer, on} from "@ngrx/store";
import {initialState} from "./counter.state";
import {changeChannelName, customIncrement, decrement, increment, reset} from "./counter.actions";

const _counterReducer = createReducer(initialState,
  on(increment, state => {
    return {
      ...state,
      counter: state.counter + 1
    }
  }), on(decrement, state => {
    return {
      ...state,
      counter: state.counter - 1
    }
  }), on(reset, state => {
    return {
      ...state,
      counter: 0
    }
  }),
  on(customIncrement, (state, action) => {
    return {
      ...state,
      counter: state.counter + action.count
    }
  }),
  on(changeChannelName, state => {
    return {
      ...state,
      channelName: 'Modified channel Name'
    }
  }));

export function counterReducer(state: any, action: Action) {
  return _counterReducer(state, action);
}
