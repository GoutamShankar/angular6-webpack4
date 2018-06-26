import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from '../../src/app/app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { DisplayPaneComponent } from './display-pane/display-pane.component';
import { SupplyPageComponent } from './supply-page/supply-page.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TopNavigationComponent,
    DisplayPaneComponent,
    SupplyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
