import { Injectable } from '@angular/core';
import { ChartModel, chartType } from '../models/chart.model';
import { Subject, Observable } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class ChartStorageService {
  private chartStorage = new Map<String, ChartModel>();
  private dataStorageSubject = new Subject<Map<String, ChartModel>>();

  constructor() {}
  getRandomChartData() {
    const labels = [];
    const data = [];
    for (let i = 0; i > -7; i--) {
      labels.push(
        moment()
          .add(i, 'days')
          .format('YYYY/MM/DD')
      );
      data.push(Math.floor(Math.random() * 400 + 100));
    }
    console.log(chartType.UNKNOW);
    return new ChartModel(
      chartType.UNKNOW,
      moment().format('YYYYMMDDHHmmss'),
      labels.reverse(),
      data.reverse()
    );
  }

  getChartDataFromStorage(id) {
    return this.chartStorage.get(id);
  }

  saveChartToStorage(chartData: any) {
    this.chartStorage.set(chartData.name, chartData);
    this.dataStorageSubject.next(this.chartStorage);
  }
  getChartStorageList(): Observable<Map<String, ChartModel>> {
    return this.dataStorageSubject.asObservable();
  }
}
