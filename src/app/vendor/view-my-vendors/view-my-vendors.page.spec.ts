import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyVendorsPage } from './view-my-vendors.page';

describe('ViewMyVendorsPage', () => {
  let component: ViewMyVendorsPage;
  let fixture: ComponentFixture<ViewMyVendorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyVendorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyVendorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
