import { HoverDirective } from './hover.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<div  style="background:blue; padding: 2em; " appHover>`
})
class TestHoverComponent {
}

describe('HoverDirective', () => {

  let component: TestHoverComponent;
  let fixture: ComponentFixture<TestHoverComponent>;
  let divEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [TestHoverComponent, HoverDirective]
    });
    fixture = TestBed.createComponent(TestHoverComponent);
    component = fixture.componentInstance;
    divEl = fixture.debugElement.query(By.css('div'));
});

  it('Test - 1 : Hover Directive Instance should be created', () => {
    const directive = new HoverDirective();
    expect(directive).toBeTruthy();
  });

  it('Test - 2 : OnMouseOver background color should be green and on mouse out color should be blue', () => {
    divEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(divEl.nativeElement.style.backgroundColor).toBe('green');

    divEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(divEl.nativeElement.style.backgroundColor).toBe('blue');
});

});
