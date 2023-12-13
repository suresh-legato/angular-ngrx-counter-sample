import { createReducer, on } from '@ngrx/store';
import { customIncrement, decrement, increment, reset } from './counter.action';
import { initialState } from './counter.state';

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}

const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    console.log('increment', state);
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    console.log('decrement', state);
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    console.log('reset', state);
    return {
      ...state,
      counter: 0,
    };
  }),
  on(customIncrement, (state, action) => {
    console.log('customIncrement', state);
    return {
      ...state,
      counter:
        action.action == 'add'
          ? state.counter + action.value
          : state.counter - action.value,
    };
  })
);
