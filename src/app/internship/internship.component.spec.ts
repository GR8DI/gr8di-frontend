import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternshipComponent } from './internship.component';

describe('SummerInternshipComponent', () => {
  let component: InternshipComponent;
  let fixture: ComponentFixture<InternshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
