import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseViewPage } from './expense-view.page';

describe('ExpenseViewPage', () => {
  let component: ExpenseViewPage;
  let fixture: ComponentFixture<ExpenseViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
