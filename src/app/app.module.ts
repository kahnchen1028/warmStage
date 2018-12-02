import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './componments/layout/header/header.component';
import { FooterComponent } from './componments/layout/footer/footer.component';
import { MainComponent } from './componments/layout/main/main.component';
import { SidebarComponent } from './componments/layout/sidebar/sidebar.component';
import { MaterialModule } from './module/material.module';
import { LayoutComponent } from './componments/layout/layout/layout.component';
import { BuildingComponent } from './componments/building/building.component';
import { CompanyComponent } from './componments/company/company.component';
import { ChartListComponent } from './componments/chart-list/chart-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    LayoutComponent,
    BuildingComponent,
    CompanyComponent,
    ChartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
