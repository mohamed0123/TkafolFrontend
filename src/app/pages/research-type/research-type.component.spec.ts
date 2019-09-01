import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchTypeComponent } from './research-type.component';

describe('ResearchTypeComponent', () => {
  let component: ResearchTypeComponent;
  let fixture: ComponentFixture<ResearchTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
