import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { MainComponent } from './components/layout/main/main.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { MaterialModule } from './module/material.module';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { ChartModule } from 'primeng/chart';
import { ChartToolBarComponent } from './components/shared/chart-tool-bar/chart-tool-bar.component';
import { TradeviewComponent } from './components/content/tradeview/tradeview/tradeview.component';
import { LineChartComponent } from './components/content/d3/line-chart/line-chart.component';
import { HistoryComponent } from './components/content/history/history.component';
import { CompanyComponent } from './components/content/company/company.component';
import { BuildingComponent } from './components/content/building/building.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    TradeviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AccordionModule,
    FontAwesomeModule,
    MaterialModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
