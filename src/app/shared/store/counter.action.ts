import { createAction, props } from '@ngrx/store';

export const increment = createAction('INCREMENT');
export const decrement = createAction('DECREMENT');
export const reset = createAction('RESET');
export const customIncrement = createAction(
  'CUSTOM_INCREMENT',
  props<{ value: number; action: string }>()
);

export const changeChannelName = createAction(
  'CHANGE_CHANNEL_NAME',
  props<{ name: string }>()
);
