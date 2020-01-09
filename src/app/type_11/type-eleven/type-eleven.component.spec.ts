import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeElevenComponent } from './type-eleven.component';

describe('TypeElevenComponent', () => {
  let component: TypeElevenComponent;
  let fixture: ComponentFixture<TypeElevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeElevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeElevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
