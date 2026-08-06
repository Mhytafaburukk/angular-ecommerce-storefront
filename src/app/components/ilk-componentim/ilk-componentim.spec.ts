import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlkComponentim } from './ilk-componentim';

describe('IlkComponentim', () => {
  let component: IlkComponentim;
  let fixture: ComponentFixture<IlkComponentim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IlkComponentim],
    }).compileComponents();

    fixture = TestBed.createComponent(IlkComponentim);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
