import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoutScannerComponent } from './inout-scanner.component';

describe('InoutScannerComponent', () => {
  let component: InoutScannerComponent;
  let fixture: ComponentFixture<InoutScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InoutScannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InoutScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
