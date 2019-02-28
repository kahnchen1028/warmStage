import { Component, OnInit } from '@angular/core';
import { ChartModel, chartType } from 'src/app/models/chart.model';
import { ChartStorageService } from 'src/app/services/chart-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  chartData: any;
  hasData = false;
  currenChartData: ChartModel;
  constructor(
    private chartStorage: ChartStorageService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      if (typeof params.id === 'undefined') {
      } else {
        const currentData = this.chartStorage.getChartDataFromStorage(
          params.id
        );
        console.log(currentData);
        if (typeof currentData !== 'undefined') {
          this.hasData = true;
          this.chartData = currentData;
        }

        console.log(this.chartData);
      }
    });
  }
}
