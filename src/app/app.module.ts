import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularTagSelectModule } from 'angular-tag-select';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AngularTagSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
