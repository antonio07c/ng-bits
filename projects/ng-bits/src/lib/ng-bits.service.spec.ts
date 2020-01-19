import { TestBed } from '@angular/core/testing';

import { NgBitsService } from './ng-bits.service';

describe('NgBitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgBitsService = TestBed.get(NgBitsService);
    expect(service).toBeTruthy();
  });
});
