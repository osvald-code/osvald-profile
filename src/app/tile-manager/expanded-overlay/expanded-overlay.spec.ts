import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedOverlay } from './expanded-overlay';

describe('ExpandedOverlay', () => {
  let component: ExpandedOverlay;
  let fixture: ComponentFixture<ExpandedOverlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpandedOverlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpandedOverlay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
