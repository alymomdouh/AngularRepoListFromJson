import { TestBed } from '@angular/core/testing';

import { APISericeService } from './apiserice.service';

describe('APISericeService', () => {
  let service: APISericeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APISericeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
