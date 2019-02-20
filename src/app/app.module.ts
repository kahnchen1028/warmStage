import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
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
import { ChartModule } from 'primeng/chart';
import { ChartToolBarComponent } from './componments/shared/chart-tool-bar/chart-tool-bar.component';
import { HistoryComponent } from './componments/history/history.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LineChartComponent } from './componments/d3/line-chart/line-chart.component';

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
    ChartToolBarComponent,
    HistoryComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    FontAwesomeModule,
    MaterialModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
