import { TestBed } from '@angular/core/testing';

import { BugsListResolver } from './bugs-list.resolver';

describe('BugsListResolver', () => {
  let service: BugsListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BugsListResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
