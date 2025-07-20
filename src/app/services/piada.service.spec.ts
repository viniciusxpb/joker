import { TestBed } from '@angular/core/testing';

import { PiadaService } from './piada.service';

describe('PiadaService', () => {
  let service: PiadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PiadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
