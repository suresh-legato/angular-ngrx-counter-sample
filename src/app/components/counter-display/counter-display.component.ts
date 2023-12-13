import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.scss',
})
export class CounterDisplayComponent implements OnInit, OnDestroy {
  counterDisplay!: number;
  channelName!: string;
  counterSubscription!: Subscription;

  constructor(private store: Store<{ counter: CounterModel }>) {}

  ngOnInit(): void {
    this.counterSubscription = this.store
      .select('counter')
      .subscribe((data) => {
        console.log('data', data);
        this.counterDisplay = data.counter;
        this.channelName = data.channelName;
      });
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
