import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactsWindowComponent } from './add-contacts-window.component';

describe('AddContactsWindowComponent', () => {
  let component: AddContactsWindowComponent;
  let fixture: ComponentFixture<AddContactsWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddContactsWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
