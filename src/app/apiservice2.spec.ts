import { TestBed } from '@angular/core/testing';

import { Apiservice2 } from './apiservice2';

describe('Apiservice2', () => {
  let service: Apiservice2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apiservice2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
