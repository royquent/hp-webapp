import { TestBed } from '@angular/core/testing';

import { CharacterListResolver } from './character-list.resolver';

describe('CharacterListResolver', () => {
  let resolver: CharacterListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CharacterListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
