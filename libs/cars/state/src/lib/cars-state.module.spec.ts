import { async, TestBed } from '@angular/core/testing';
import { CarsStateModule } from './cars-state.module';

describe('CarsStateModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CarsStateModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CarsStateModule).toBeDefined();
  });
});
