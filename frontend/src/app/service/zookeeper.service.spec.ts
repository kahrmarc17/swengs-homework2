import { TestBed } from '@angular/core/testing';

import { ZookeeperService } from './zookeeper.service';

describe('ZookeeperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZookeeperService = TestBed.get(ZookeeperService);
    expect(service).toBeTruthy();
  });
});
