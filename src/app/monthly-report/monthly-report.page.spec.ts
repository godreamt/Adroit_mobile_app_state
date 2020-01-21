import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyReportPage } from './monthly-report.page';

describe('MonthlyReportPage', () => {
  let component: MonthlyReportPage;
  let fixture: ComponentFixture<MonthlyReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlyReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
