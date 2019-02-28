import { Component, OnInit, Input } from '@angular/core';
import { faBuilding, faSuitcase } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { ChartModel } from 'src/app/models/chart.model';
import { ChartStorageService } from 'src/app/services/chart-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  chartListObserver: Subscription;
  chartList = new Map<String, ChartModel>();
  sidebarList = new Map([
    ['category', {
      title: "Category",
      itemList: [
        { name: "大樓", icon: faBuilding, path: ['/', 'building'] },
        { name: "公司", icon: faSuitcase, path: ['/', 'company'] }
      ]
    }],
    ['d3',
      {
        title: "D3",
        itemList: [
          { name: "LineChart", icon: faBuilding, path: ['/', 'd3', 'lineChart'] },
        ]
      }],
      ['tradeview',
      {
        title: "Tradeview",
        itemList: [
          { name: "Tradeview", icon: faBuilding, path: ['/', 'tradeview'] },
        ]
      }],
    ['chartList', {
      title: "Chart List",
      itemList: [

      ]
    }],
    
  ])


  @Input()
  opened: boolean;
  constructor(private chartStorage: ChartStorageService) { }
  ngOnInit() {
    this.chartListObserver = this.chartStorage
      .getChartStorageList()
      .subscribe(data => {
        this.sidebarList.get('chartList').itemList =
          Array.from(data.values()).map((item) => {
            console.log(item);
            return {
              "name": `${item.type}：${item.name}`,
              "icon": faBuilding,
              "path": ['/', 'history', item.name]
            }
          }
          );
      });
  }
}
