import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstroLog } from './astro-log';

describe('AstroLog', () => {
  let component: AstroLog;
  let fixture: ComponentFixture<AstroLog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstroLog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstroLog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
