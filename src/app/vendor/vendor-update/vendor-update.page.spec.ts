import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorUpdatePage } from './vendor-update.page';

describe('VendorUpdatePage', () => {
  let component: VendorUpdatePage;
  let fixture: ComponentFixture<VendorUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorUpdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
