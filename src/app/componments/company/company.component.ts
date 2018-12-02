import { Component, OnInit } from '@angular/core';
import { ChartModel, chartType } from 'src/app/models/chart.model';
import { ChartStorageService } from '../../services/chart-storage.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  chartData: any;
  currenChartData: ChartModel;

  constructor(private chartStorage: ChartStorageService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    const currenChartData = this.chartStorage.getRandomChartData();
    currenChartData.type = chartType.COMPANY;
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
  }
}
