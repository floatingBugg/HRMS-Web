import { TestBed } from '@angular/core/testing';

import { SaveAssignedDataService } from './save-assigned-data.service';

describe('SaveAssignedDataService', () => {
  let service: SaveAssignedDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveAssignedDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
