/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BwmDataService } from './bwm-data.service';

describe('Service: BwmData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BwmDataService]
    });
  });

  it('should ...', inject([BwmDataService], (service: BwmDataService) => {
    expect(service).toBeTruthy();
  }));
});
