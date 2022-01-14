import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaySearchComponent } from './pay-search.component';

describe('PaySearchComponent', () => {
  let component: PaySearchComponent;
  let fixture: ComponentFixture<PaySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaySearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
