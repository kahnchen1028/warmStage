import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChartStorageService } from '../../services/chart-storage.service';
import { Observable, Subscription } from 'rxjs';
import { ChartModel } from '../../models/chart.model';

@Component({
  selector: 'app-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.scss'],
})
export class ChartListComponent implements OnInit, OnDestroy {
  chartListObserver: Subscription;
  chartList = new Map<String, ChartModel>();
  constructor(private chartStorage: ChartStorageService) {}

  ngOnInit() {
    this.chartListObserver = this.chartStorage
      .getChartStorageList()
      .subscribe(data => {
        console.log(data);
        this.chartList = data;
      });
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.chartListObserver.unsubscribe();
  }
}
