import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../../shared/store/counter.action';
import { CounterModel } from '../../shared/store/counter.model';
import { Subscription } from 'rxjs';
import { getChannelName } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrl: './custom-counter.component.scss',
})
export class CustomCounterComponent implements OnInit, OnDestroy {
  counterInput!: number;
  actionType: string = 'add';
  channelName!: string;
  counterSubscription!: Subscription;

  constructor(private store: Store<{ counter: CounterModel }>) {}

  ngOnInit(): void {
    this.counterSubscription = this.store
      .select(getChannelName)
      .subscribe((data) => {
        console.log('data', data);
        this.channelName = data;
        console.log('CustomCounterComponent');
      });
  }

  onCustomIncrement() {
    this.store.dispatch(
      customIncrement({ value: +this.counterInput, action: this.actionType })
    );
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) this.counterSubscription.unsubscribe();
  }
}
