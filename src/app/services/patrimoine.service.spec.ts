import { TestBed } from '@angular/core/testing';

import { PatrimoineService } from './patrimoine.service';

describe('PatrimoineService', () => {
  let service: PatrimoineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatrimoineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
