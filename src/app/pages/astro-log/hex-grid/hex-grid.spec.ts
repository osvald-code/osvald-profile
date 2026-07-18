import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexGrid } from './hex-grid';

describe('HexGrid', () => {
  let component: HexGrid;
  let fixture: ComponentFixture<HexGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
