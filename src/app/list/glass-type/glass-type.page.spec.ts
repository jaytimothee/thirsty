import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassTypePage } from './glass-type.page';

describe('GlassTypePage', () => {
  let component: GlassTypePage;
  let fixture: ComponentFixture<GlassTypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlassTypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlassTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
