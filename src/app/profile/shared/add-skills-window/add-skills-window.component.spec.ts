import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkillsWindowComponent } from './add-skills-window.component';

describe('AddSkillsWindowComponent', () => {
  let component: AddSkillsWindowComponent;
  let fixture: ComponentFixture<AddSkillsWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSkillsWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkillsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
