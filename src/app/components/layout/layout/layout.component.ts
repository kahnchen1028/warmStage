import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  opened: boolean;
  arrow = '>';
  constructor() { }

  ngOnInit() {
  }

  onToggleSidebar(opened) {
    this.opened = opened;
    if (this.opened) {
      this.arrow = '<';
    } else {
      this.arrow = '>';
    }
  }
}
