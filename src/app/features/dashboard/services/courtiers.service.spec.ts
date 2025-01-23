import { TestBed } from '@angular/core/testing';

import { CourtiersService } from './courtiers.service';

describe('CourtiersService', () => {
  let service: CourtiersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtiersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
