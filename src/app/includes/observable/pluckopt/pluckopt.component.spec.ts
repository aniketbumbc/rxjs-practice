import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluckoptComponent } from './pluckopt.component';

describe('PluckoptComponent', () => {
  let component: PluckoptComponent;
  let fixture: ComponentFixture<PluckoptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluckoptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluckoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
