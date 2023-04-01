import { TestBed } from '@angular/core/testing';

import { CharacterDetailResolver } from './character-detail.resolver';

describe('CharacterDetailResolver', () => {
  let resolver: CharacterDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CharacterDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
