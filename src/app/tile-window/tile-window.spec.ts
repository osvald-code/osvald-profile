import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileWindow } from './tile-window';

describe('TileWindow', () => {
  let component: TileWindow;
  let fixture: ComponentFixture<TileWindow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TileWindow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileWindow);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
