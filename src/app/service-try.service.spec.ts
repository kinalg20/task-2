import { TestBed } from '@angular/core/testing';
import { ServiceTryService } from './service-try.service';

describe('ServiceTryService', () => {
  let service: ServiceTryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceTryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
