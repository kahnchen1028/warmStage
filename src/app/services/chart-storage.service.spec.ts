import { TestBed } from '@angular/core/testing';

import { ChartStorageService } from './chart-storage.service';

describe('ChartStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChartStorageService = TestBed.get(ChartStorageService);
    expect(service).toBeTruthy();
  });
});
