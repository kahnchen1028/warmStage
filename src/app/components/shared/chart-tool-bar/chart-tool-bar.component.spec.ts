import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartToolBarComponent } from './chart-tool-bar.component';

describe('ChartToolBarComponent', () => {
  let component: ChartToolBarComponent;
  let fixture: ComponentFixture<ChartToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
