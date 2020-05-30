import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarTileComponent} from './car-tiles/car-tile/car-tile.component';
import {CarTilesComponent} from './car-tiles/car-tiles.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainContentComponent} from './main-content/main-content.component';
import {CustomerListComponent} from './customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CarTileComponent,
    CarTilesComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
