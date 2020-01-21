import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionUpdatePage } from './collection-update.page';

describe('CollectionUpdatePage', () => {
  let component: CollectionUpdatePage;
  let fixture: ComponentFixture<CollectionUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionUpdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
