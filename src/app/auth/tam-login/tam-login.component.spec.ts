import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamLoginComponent } from './tam-login.component';

describe('TamLoginComponent', () => {
  let component: TamLoginComponent;
  let fixture: ComponentFixture<TamLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TamLoginComponent]
    });
    fixture = TestBed.createComponent(TamLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
