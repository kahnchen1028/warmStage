import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartStorageService } from '../../services/chart-storage.service';
import { ChartModel, chartType } from 'src/app/models/chart.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss'],
})
export class BuildingComponent implements OnInit, OnDestroy {
  chartData: any;
  chartSubjection: Subscription;
  constructor(private chartStorage: ChartStorageService) {}
  ngOnInit() {
    this.chartSubjection = this.chartStorage
      .getRandomChartSubjection()
      .subscribe(currenChartData => {
        currenChartData.type = chartType.BUILDING;
        this.chartData = {
          dataType: currenChartData.type,
          name: currenChartData.name,
          labels: currenChartData.labels,
          datasets: [
            {
              label: '訪客登入人次',
              backgroundColor: '#1976d2',
              borderColor: '#0d47a1',
              data: currenChartData.data,
            },
          ],
        };
      });
    this.reloadData();
  }

  reloadData() {
    this.chartStorage.reloadChartData();
  }
  ngOnDestroy() {
    this.chartSubjection.unsubscribe();
  }
}
