import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildeightComponent } from './childeight.component';

describe('ChildeightComponent', () => {
  let component: ChildeightComponent;
  let fixture: ComponentFixture<ChildeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
