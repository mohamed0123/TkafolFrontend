import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGovernmentComponent } from './create-government.component';

describe('CreateGovernmentComponent', () => {
  let component: CreateGovernmentComponent;
  let fixture: ComponentFixture<CreateGovernmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGovernmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGovernmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
