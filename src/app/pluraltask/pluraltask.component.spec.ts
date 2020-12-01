import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluraltaskComponent } from './pluraltask.component';

describe('PluraltaskComponent', () => {
  let component: PluraltaskComponent;
  let fixture: ComponentFixture<PluraltaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluraltaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluraltaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
