import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholLevelPage } from './alcohol-level.page';

describe('AlcoholLevelPage', () => {
  let component: AlcoholLevelPage;
  let fixture: ComponentFixture<AlcoholLevelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoholLevelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholLevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
