import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColerPickerComponent } from './coler-picker/coler-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ColerPickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
