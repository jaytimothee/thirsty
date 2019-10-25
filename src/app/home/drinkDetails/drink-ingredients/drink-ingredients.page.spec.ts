import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkIngredientsPage } from './drink-ingredients.page';

describe('DrinkIngredientsPage', () => {
  let component: DrinkIngredientsPage;
  let fixture: ComponentFixture<DrinkIngredientsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkIngredientsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkIngredientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
