import { TestBed } from '@angular/core/testing';

import { BmwDataService } from './bmw-data.service';

describe('BmwDataService', () => {
  let service: BmwDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmwDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
