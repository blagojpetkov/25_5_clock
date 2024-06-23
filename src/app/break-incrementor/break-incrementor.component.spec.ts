import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakIncrementorComponent } from './break-incrementor.component';

describe('BreakIncrementorComponent', () => {
  let component: BreakIncrementorComponent;
  let fixture: ComponentFixture<BreakIncrementorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreakIncrementorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreakIncrementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
