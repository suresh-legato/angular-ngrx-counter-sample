import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';
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
  })
);
