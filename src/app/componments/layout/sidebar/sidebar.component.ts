import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  opened: boolean;
  arrow = '>';
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.opened = !this.opened;
    if (this.opened) {
      this.arrow = '<';
    } else {
      this.arrow = '>';
    }
  }

}
