import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {QuickStartComponent} from '../quicktart/quickstart.component'


@NgModule({
  declarations: [
    AppComponent,
    QuickStartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, QuickStartComponent]
})
export class AppModule {
}
