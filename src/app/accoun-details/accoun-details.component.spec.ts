import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccounDetailsComponent } from './accoun-details.component';

describe('AccounDetailsComponent', () => {
  let component: AccounDetailsComponent;
  let fixture: ComponentFixture<AccounDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccounDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccounDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
