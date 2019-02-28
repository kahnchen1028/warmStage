import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
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
