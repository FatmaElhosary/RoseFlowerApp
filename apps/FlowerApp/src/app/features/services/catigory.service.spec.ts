import { TestBed } from '@angular/core/testing';

import { CatigoryService } from './catigory.service';

describe('CatigoryService', () => {
  let service: CatigoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatigoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
