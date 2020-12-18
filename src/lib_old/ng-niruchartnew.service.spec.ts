import { TestBed } from '@angular/core/testing';

import { NgNiruchartnewService } from './ng-niruchartnew.service';

describe('NgNiruchartnewService', () => {
  let service: NgNiruchartnewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgNiruchartnewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
