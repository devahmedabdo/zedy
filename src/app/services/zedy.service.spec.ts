import { TestBed } from '@angular/core/testing';

import { ZedyService } from './zedy.service';

describe('ZedyService', () => {
  let service: ZedyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZedyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
