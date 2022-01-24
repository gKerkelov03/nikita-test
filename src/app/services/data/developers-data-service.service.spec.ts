import { TestBed } from '@angular/core/testing';

import { DevelopersDataService } from './developers-data-service.service';

describe('DevelopersDataServiceService', () => {
  let service: DevelopersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevelopersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
