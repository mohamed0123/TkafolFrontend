import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateResearchTypeComponent } from './create-research-type.component';

describe('CreateResearchTypeComponent', () => {
  let component: CreateResearchTypeComponent;
  let fixture: ComponentFixture<CreateResearchTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateResearchTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateResearchTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
