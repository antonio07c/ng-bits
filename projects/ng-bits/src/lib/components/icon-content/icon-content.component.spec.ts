import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconContentComponent } from './icon-content.component';

describe('IconContentComponent', () => {
  let component: IconContentComponent;
  let fixture: ComponentFixture<IconContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
