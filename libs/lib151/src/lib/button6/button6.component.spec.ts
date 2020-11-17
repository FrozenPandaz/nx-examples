import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button6Component } from './button6.component';

describe('Button6Component', () => {
  let component: Button6Component;
  let fixture: ComponentFixture<Button6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Button6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Button6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
