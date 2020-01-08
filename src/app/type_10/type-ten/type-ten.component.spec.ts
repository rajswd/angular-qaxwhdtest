import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeTenComponent } from './type-ten.component';

describe('TypeTenComponent', () => {
  let component: TypeTenComponent;
  let fixture: ComponentFixture<TypeTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
