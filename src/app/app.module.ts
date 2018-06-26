import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../../src/app/app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { DisplayPaneComponent } from './display-pane/display-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TopNavigationComponent,
    DisplayPaneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
