import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ChartModel } from 'src/app/models/chart.model';
import { ChartStorageService } from '../../../services/chart-storage.service';

@Component({
  selector: 'app-chart-tool-bar',
  templateUrl: './chart-tool-bar.component.html',
  styleUrls: ['./chart-tool-bar.component.scss'],
})
export class ChartToolBarComponent implements OnInit {
  @Output()
  reload: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  data: ChartModel;
  constructor(private chartStorage: ChartStorageService) {}

  ngOnInit() {}
  saveChart() {
    console.log(this.data);
    this.chartStorage.saveChartToStorage(this.data);
  }
  reloadChart() {
    this.reload.emit();
  }
}
