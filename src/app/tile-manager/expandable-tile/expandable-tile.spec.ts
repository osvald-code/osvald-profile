import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandableTile } from './expandable-tile';

describe('ExpandableTile', () => {
  let component: ExpandableTile;
  let fixture: ComponentFixture<ExpandableTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandableTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandableTile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
