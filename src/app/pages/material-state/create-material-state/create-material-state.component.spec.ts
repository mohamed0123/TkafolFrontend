import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMaterialStateComponent } from './create-material-state.component';

describe('CreateMaterialStateComponent', () => {
  let component: CreateMaterialStateComponent;
  let fixture: ComponentFixture<CreateMaterialStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMaterialStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMaterialStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
