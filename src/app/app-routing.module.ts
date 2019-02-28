import { TradeviewComponent } from './components/content/tradeview/tradeview/tradeview.component';
import { LineChartComponent } from './components/content/d3/line-chart/line-chart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingComponent } from './components/content/building/building.component';
import { CompanyComponent } from './components/content/company/company.component';
import { HistoryComponent } from './components/content/history/history.component';

const routes: Routes = [
  {
    path: '',
    component: BuildingComponent
  },
  {
    path: 'building',
    component: BuildingComponent
  },
  {
    path: 'company',
    component: CompanyComponent
  },
  {
    path: 'd3/lineChart',
    component: LineChartComponent
  },
  {
    path: 'tradeview',
    component: TradeviewComponent
  },
  {
    path: 'history/:id',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
