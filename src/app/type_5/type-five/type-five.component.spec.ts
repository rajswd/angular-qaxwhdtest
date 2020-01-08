import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeFiveComponent } from './type-five.component';

describe('TypeFiveComponent', () => {
  let component: TypeFiveComponent;
  let fixture: ComponentFixture<TypeFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
