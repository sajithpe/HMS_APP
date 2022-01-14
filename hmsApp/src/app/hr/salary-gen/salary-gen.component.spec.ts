import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryGenComponent } from './salary-gen.component';

describe('SalaryGenComponent', () => {
  let component: SalaryGenComponent;
  let fixture: ComponentFixture<SalaryGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
