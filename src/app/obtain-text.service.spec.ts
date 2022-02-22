import { TestBed } from '@angular/core/testing';

import { ObtainTextService } from './obtain-text.service';

describe('ObtainTextService', () => {
  let service: ObtainTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtainTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
