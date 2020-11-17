import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button9Component } from './button9.component';

describe('Button9Component', () => {
  let component: Button9Component;
  let fixture: ComponentFixture<Button9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Button9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Button9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
