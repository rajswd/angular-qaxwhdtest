import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSixComponent } from './type-six.component';

describe('TypeSixComponent', () => {
  let component: TypeSixComponent;
  let fixture: ComponentFixture<TypeSixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
