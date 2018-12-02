import { Component, OnInit } from '@angular/core';
import { ChartStorageService } from '../../services/chart-storage.service';
import { ChartModel, chartType } from 'src/app/models/chart.model';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.scss'],
})
export class BuildingComponent implements OnInit {
  chartData: any;
  constructor(private chartStorage: ChartStorageService) {}
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    const currenChartData = this.chartStorage.getRandomChartData();
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
  }
}
