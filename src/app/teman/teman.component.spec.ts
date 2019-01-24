import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemanComponent } from './teman.component';

describe('TemanComponent', () => {
  let component: TemanComponent;
  let fixture: ComponentFixture<TemanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
