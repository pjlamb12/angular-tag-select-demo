import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularTagSelectModule } from 'angular-tag-select';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PossibleTagListComponent } from './possible-tag-list/possible-tag-list.component';
import { SelectedTagListComponent } from './selected-tag-list/selected-tag-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PossibleTagListComponent,
    SelectedTagListComponent
  ],
  imports: [
    BrowserModule,
    AngularTagSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
