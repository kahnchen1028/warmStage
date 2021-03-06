import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faAngular } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logo = faAngular;
  bell = faBell;
  @Input()
  arrow: string;

  @Input()
  opened: boolean;

  @Output()
  toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  toggle() {
    this.opened = !this.opened;
    this.toggleSidebar.emit(this.opened);
  }
}
