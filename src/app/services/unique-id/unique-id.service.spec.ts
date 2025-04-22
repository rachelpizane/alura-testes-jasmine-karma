import { TestBed } from '@angular/core/testing';

import { Unique0idService } from './unique0id.service';

describe('Unique0idService', () => {
  let service: Unique0idService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Unique0idService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
