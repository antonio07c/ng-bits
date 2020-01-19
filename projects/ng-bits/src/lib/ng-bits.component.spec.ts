import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBitsComponent } from './ng-bits.component';

describe('NgBitsComponent', () => {
  let component: NgBitsComponent;
  let fixture: ComponentFixture<NgBitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgBitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
