import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-type-five',
  templateUrl: './type-five.component.html',
  styleUrls: ['./type-five.component.scss'],
  animations: [
    trigger('animateBox', [
      state('animation1', style({
        backgroundColor: 'green',
        borderRadius:'40%',
        transform: 'scale(.01)',
        opacity: 0.3,
      })),
      state('animation2', style({
        backgroundColor: 'red',
        transform: 'scale(1)',        
        opacity: 1,
      })),
      transition('*=>animation1', animate('1500ms')),
      transition('*=>animation2', animate('1000ms'))
    ])
  ]
})
export class TypeFiveComponent implements OnInit {

  name = 'Animation';
  animation = 'animation1';
  intervalId;

  constructor() { }
  ngOnInit(){
    this.startAnimation();
  }
  startAnimation(){
    if(this.intervalId){
      this.stopAnimation();
    }
    this.intervalId = setInterval(()=>{
      this.animation = this.animation =="animation1" ? "animation2" :"animation1"
    }, 2000);
  }
  stopAnimation(){
    clearInterval(this.intervalId);
  }
  changeAnimation(animation: string) {
    this.animation = animation;
  }

}
