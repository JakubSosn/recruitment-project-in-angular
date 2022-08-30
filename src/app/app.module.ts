import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './modules/homepage/components/homepage/homepage.component';
import { SidenavComponent } from './modules/common/components/sidenav/sidenav.component';
import { BonusProductsComponent } from './modules/bonus-products/bonus-products.component';
import { ChooseClientsComponent } from './modules/choose-clients/choose-clients.component';
import { ChooseProductsComponent } from './modules/choose-products/choose-products.component';
import { ClientsLimitsComponent } from './modules/clients-limits/clients-limits.component';
import { ExcludeClientsComponent } from './modules/exclude-clients/exclude-clients.component';
import { ExcludeProductsComponent } from './modules/exclude-products/exclude-products.component';
import { ProductsLimitsComponent } from './modules/products-limits/products-limits.component';
import { SummaryComponent } from './modules/summary/summary.component';
import { DefinitionComponent } from './modules/definition/definition.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { DescriptionComponent } from './modules/definition/components/description/description.component';
import { ConditionsComponent } from './modules/definition/components/conditions/conditions.component';
import { InputComponent } from './modules/common/components/input/input.component';
import { ButtonComponent } from './modules/common/components/button/button.component';
import { MatNativeDateModule } from '@angular/material/core';
import { TooltipModule } from './modules/common/tooltip/tooltip.module';
import { GridComponent } from './modules/grid/grid.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SidenavComponent,
    BonusProductsComponent,
    ChooseClientsComponent,
    ChooseProductsComponent,
    ClientsLimitsComponent,
    ExcludeClientsComponent,
    ExcludeProductsComponent,
    ProductsLimitsComponent,
    SummaryComponent,
    DefinitionComponent,
    DescriptionComponent,
    ConditionsComponent,
    InputComponent,
    ButtonComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    TooltipModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
