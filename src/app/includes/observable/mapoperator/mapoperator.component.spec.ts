import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapoperatorComponent } from './mapoperator.component';

describe('MapoperatorComponent', () => {
  let component: MapoperatorComponent;
  let fixture: ComponentFixture<MapoperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapoperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapoperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
