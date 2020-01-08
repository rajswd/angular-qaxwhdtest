import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSevenComponent } from './type-seven.component';

describe('TypeSevenComponent', () => {
  let component: TypeSevenComponent;
  let fixture: ComponentFixture<TypeSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
