import { TestBed } from '@angular/core/testing';

import { NailserviceService } from './nailservice.service';

describe('NailserviceService', () => {
  let service: NailserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NailserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
