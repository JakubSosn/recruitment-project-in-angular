import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BonusProductsComponent } from './modules/bonus-products/bonus-products.component';
import { ChooseClientsComponent } from './modules/choose-clients/choose-clients.component';
import { ChooseProductsComponent } from './modules/choose-products/choose-products.component';
import { ClientsLimitsComponent } from './modules/clients-limits/clients-limits.component';
import { DefinitionComponent } from './modules/definition/definition.component';
import { ExcludeClientsComponent } from './modules/exclude-clients/exclude-clients.component';
import { ExcludeProductsComponent } from './modules/exclude-products/exclude-products.component';
import { GridComponent } from './modules/grid/grid.component';
import { HomepageComponent } from './modules/homepage/components/homepage/homepage.component';
import { ProductsLimitsComponent } from './modules/products-limits/products-limits.component';
import { SummaryComponent } from './modules/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: DefinitionComponent,
  },
  {
    path: 'definition',
    component: DefinitionComponent,
  },
  {
    path: 'chooseProducts',
    component: ChooseProductsComponent,
  },
  {
    path: 'excludeProducts',
    component: ExcludeProductsComponent,
  },
  {
    path: 'bonusProducts',
    component: BonusProductsComponent,
  },
  {
    path: 'productsLimits',
    component: ProductsLimitsComponent,
  },
  {
    path: 'chooseClients',
    component: ChooseClientsComponent,
  },
  {
    path: 'excludeClients',
    component: ExcludeClientsComponent,
  },
  {
    path: 'clientsLimits',
    component: ClientsLimitsComponent,
  },
  {
    path: 'summary',
    component: SummaryComponent,
  },
  {
    path: 'grid',
    component: GridComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
