import { TestBed } from '@angular/core/testing';

import { InterserviceInterceptor } from './interservice.interceptor';

describe('InterserviceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterserviceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterserviceInterceptor = TestBed.inject(InterserviceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
