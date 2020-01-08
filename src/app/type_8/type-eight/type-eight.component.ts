import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-eight',
  templateUrl: './type-eight.component.html',
  styleUrls: ['./type-eight.component.scss']
})
export class TypeEightComponent implements OnInit {

  counter:Array<number> = [] ;
  constructor() { 

  }
  
  ngOnInit() {
    this.counter.length = 10;
  }

}
