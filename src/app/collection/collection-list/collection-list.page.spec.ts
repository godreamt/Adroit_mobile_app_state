import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionListPage } from './collection-list.page';

describe('CollectionListPage', () => {
  let component: CollectionListPage;
  let fixture: ComponentFixture<CollectionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
