import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDiseasesComponent } from './create-diseases.component';

describe('CreateDiseasesComponent', () => {
  let component: CreateDiseasesComponent;
  let fixture: ComponentFixture<CreateDiseasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDiseasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
