import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialStateComponent } from './material-state.component';

describe('MaterialStateComponent', () => {
  let component: MaterialStateComponent;
  let fixture: ComponentFixture<MaterialStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
