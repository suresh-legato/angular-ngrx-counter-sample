import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from './shared/store/counter.reducer';
import { CounterButtonComponent } from './components/counter-button/counter-button.component';
import { CounterDisplayComponent } from './components/counter-display/counter-display.component';

@NgModule({
  declarations: [AppComponent, CounterButtonComponent, CounterDisplayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
