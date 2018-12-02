import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './componments/layout/main/main.component';
import { BuildingComponent } from './componments/building/building.component';
import { CompanyComponent } from './componments/company/company.component';
import { ChartListComponent } from './componments/chart-list/chart-list.component';
import { HistoryComponent } from './componments/history/history.component';

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
    path: 'history/:id',
    component: HistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
