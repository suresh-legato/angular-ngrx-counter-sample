import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from '../../shared/store/counter.model';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.scss',
})
export class CounterDisplayComponent implements OnInit {
  counterDisplay!: number;
  channelName!: string;

  constructor(private store: Store<{ counter: CounterModel }>) {}

  ngOnInit(): void {
    this.store.select('counter').subscribe((data) => {
      console.log('data', data);
      this.counterDisplay = data.counter;
      this.channelName = data.channelName;
    });
  }
}
