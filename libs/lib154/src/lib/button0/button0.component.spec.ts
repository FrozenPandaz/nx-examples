import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button0Component } from './button0.component';

describe('Button0Component', () => {
  let component: Button0Component;
  let fixture: ComponentFixture<Button0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Button0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Button0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
