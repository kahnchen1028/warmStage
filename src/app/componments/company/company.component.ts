import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartModel, chartType } from 'src/app/models/chart.model';
import { ChartStorageService } from '../../services/chart-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit, OnDestroy {
  chartData: any;
  currenChartData: ChartModel;
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
              backgroundColor: '#2979ff',
              borderColor: '#2962ff',
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
