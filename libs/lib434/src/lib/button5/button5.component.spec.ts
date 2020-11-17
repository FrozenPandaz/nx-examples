import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button5Component } from './button5.component';

describe('Button5Component', () => {
  let component: Button5Component;
  let fixture: ComponentFixture<Button5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Button5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Button5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
