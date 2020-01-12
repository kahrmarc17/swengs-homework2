import { TestBed } from '@angular/core/testing';

import { ZooService } from './zoo.service';

describe('ZooService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZooService = TestBed.get(ZooService);
    expect(service).toBeTruthy();
  });
});
