import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InqSearchComponent } from './inq-search.component';

describe('InqSearchComponent', () => {
  let component: InqSearchComponent;
  let fixture: ComponentFixture<InqSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InqSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InqSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
