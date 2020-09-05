import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfnfromComponent } from './ofnfrom.component';

describe('OfnfromComponent', () => {
  let component: OfnfromComponent;
  let fixture: ComponentFixture<OfnfromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfnfromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfnfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
