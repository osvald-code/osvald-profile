import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hexagon } from './hexagon';

describe('Hexagon', () => {
  let component: Hexagon;
  let fixture: ComponentFixture<Hexagon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hexagon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hexagon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
