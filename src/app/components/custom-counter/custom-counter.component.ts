import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../../shared/store/counter.action';
import { CounterModel } from '../../shared/store/counter.model';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.scss',
})
export class CustomCounterComponent {
  counterInput!: number;
  actionType: string = 'add';

  constructor(private store: Store<{ counter: CounterModel }>) {}

  onCustomIncrement() {
    this.store.dispatch(
      customIncrement({ value: +this.counterInput, action: this.actionType })
    );
  }
}
