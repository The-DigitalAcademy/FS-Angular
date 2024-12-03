import { TestBed } from '@angular/core/testing';

import { BmwService } from './bmw.service';

describe('BmwService', () => {
  let service: BmwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BmwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
