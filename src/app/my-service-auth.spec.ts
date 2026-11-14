import { TestBed } from '@angular/core/testing';

import { MyServiceAuth } from './my-service-auth';

describe('MyServiceAuth', () => {
  let service: MyServiceAuth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyServiceAuth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
