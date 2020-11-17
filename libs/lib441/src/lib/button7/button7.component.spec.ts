import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button7Component } from './button7.component';

describe('Button7Component', () => {
  let component: Button7Component;
  let fixture: ComponentFixture<Button7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Button7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Button7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
