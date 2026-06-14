import { TestBed } from '@angular/core/testing';

import { TileManager } from './tile-manager';

describe('TileManager', () => {
  let service: TileManager;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TileManager);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
