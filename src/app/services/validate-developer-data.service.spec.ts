import { TestBed } from '@angular/core/testing';

import { ValidateDeveloperDataService } from './validate-developer-data.service';

describe('ValidateDeveloperDataService', () => {
  let service: ValidateDeveloperDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateDeveloperDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
