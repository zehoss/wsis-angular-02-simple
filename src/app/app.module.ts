import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarTileComponent} from './car-tiles/car-tile/car-tile.component';
import {CarTilesComponent} from './car-tiles/car-tiles.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainContentComponent} from './main-content/main-content.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AdminComponent} from './admin/admin.component';
import {AdminCarListComponent} from './admin/admin-car-list/admin-car-list.component';
import {AdminCustomerListComponent} from './admin/admin-customer-list/admin-customer-list.component';
import {CarDetailsComponent} from './car-tiles/car-details/car-details.component';
import {CarEditComponent} from './car-tiles/car-edit/car-edit.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CarTileComponent,
    CarTilesComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    CustomerListComponent,
    AdminComponent,
    AdminCarListComponent,
    AdminCustomerListComponent,
    CarDetailsComponent,
    CarEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
