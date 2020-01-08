import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeNineComponent } from './type-nine.component';

describe('TypeNineComponent', () => {
  let component: TypeNineComponent;
  let fixture: ComponentFixture<TypeNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
