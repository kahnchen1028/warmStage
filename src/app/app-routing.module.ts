import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuildingComponent } from './componments/building/building.component';
import { CompanyComponent } from './componments/company/company.component';
import { HistoryComponent } from './componments/history/history.component';
import { LineChartComponent } from './componments/d3/line-chart/line-chart.component';

const routes: Routes = [
  {
    path: '',
    component: BuildingComponent,
  },
  {
    path: 'building',
    component: BuildingComponent,
  },
  {
    path: 'company',
    component: CompanyComponent,
  },
  {
    path: 'd3/lineChart',
    component: LineChartComponent,
  },
  {
    path: 'history/:id',
    component: HistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
