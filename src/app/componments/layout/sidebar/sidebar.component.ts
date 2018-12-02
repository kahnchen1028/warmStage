import { Component, OnInit, Input } from '@angular/core';
import { faBuilding, faSuitcase } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  faIcon = {
    faBuilding: faBuilding,
    faSuitcase: faSuitcase,
  };

  @Input()
  opened: boolean;
  ngOnInit() {}
}
