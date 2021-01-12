import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvreaderComponent } from './csvreader.component';

describe('CsvreaderComponent', () => {
  let component: CsvreaderComponent;
  let fixture: ComponentFixture<CsvreaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsvreaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsvreaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
