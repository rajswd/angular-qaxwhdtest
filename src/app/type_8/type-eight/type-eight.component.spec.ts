import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEightComponent } from './type-eight.component';

describe('TypeEightComponent', () => {
  let component: TypeEightComponent;
  let fixture: ComponentFixture<TypeEightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeEightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
