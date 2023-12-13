import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  decrement,
  increment,
  changeChannelName,
  reset,
} from '../../shared/store/counter.action';
import { CounterModel } from '../../shared/store/counter.model';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.scss',
})
export class CounterButtonComponent {
  constructor(private store: Store<{ counter: CounterModel }>) {}

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }

  onRename() {
    this.store.dispatch(changeChannelName({ name: 'Some Name 2' }));
  }
}
