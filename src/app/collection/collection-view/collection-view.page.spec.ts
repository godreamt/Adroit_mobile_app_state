import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionViewPage } from './collection-view.page';

describe('CollectionViewPage', () => {
  let component: CollectionViewPage;
  let fixture: ComponentFixture<CollectionViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionViewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
