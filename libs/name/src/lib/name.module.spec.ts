import { async, TestBed } from '@angular/core/testing';
import { NameModule } from './name.module';

describe('NameModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NameModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NameModule).toBeDefined();
  });
});
