import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMaterialStateComponent } from './edit-material-state.component';

describe('EditMaterialStateComponent', () => {
  let component: EditMaterialStateComponent;
  let fixture: ComponentFixture<EditMaterialStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMaterialStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMaterialStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
