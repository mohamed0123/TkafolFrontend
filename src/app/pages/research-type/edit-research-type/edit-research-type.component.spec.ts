import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResearchTypeComponent } from './edit-research-type.component';

describe('EditResearchTypeComponent', () => {
  let component: EditResearchTypeComponent;
  let fixture: ComponentFixture<EditResearchTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResearchTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResearchTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
