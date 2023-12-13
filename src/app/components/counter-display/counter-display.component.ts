import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from '../../shared/store/counter.selector';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.scss',
})
export class CounterDisplayComponent implements OnInit, OnDestroy {
  counterDisplay!: number;
  channelName!: string;
  counterSubscription!: Subscription;
  counter$!: Observable<CounterModel>;

  constructor(private store: Store<{ counter: CounterModel }>) {}

  ngOnInit(): void {
    this.counterSubscription = this.store
      .select(getCounter)
      .subscribe((data) => {
        console.log('data', data);
        this.counterDisplay = data;
      });
    console.log('CounterDisplayComponent');
    // this.counter$ = this.store.select('counter');
  }

  ngOnDestroy(): void {
    if (this.counterSubscription) {
      this.counterSubscription.unsubscribe();
    }
  }
}
