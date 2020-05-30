import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarTilesComponent} from '../car-tiles/car-tiles.component';
import {CustomerListComponent} from '../customer-list/customer-list.component';

const routing: Routes = [
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  {path: 'cars', component: CarTilesComponent},
  {path: 'customers', component: CustomerListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routing)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
