import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionIncrementorComponent } from './session-incrementor.component';

describe('SessionIncrementorComponent', () => {
  let component: SessionIncrementorComponent;
  let fixture: ComponentFixture<SessionIncrementorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionIncrementorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionIncrementorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
