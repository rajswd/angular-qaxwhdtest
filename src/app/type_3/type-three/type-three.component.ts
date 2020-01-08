import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-type-three',
  templateUrl: './type-three.component.html',
  styleUrls: ['./type-three.component.scss']
})
export class TypeThreeComponent implements OnInit, OnDestroy {

  showbutton:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toEnablechildLink(){
    localStorage.setItem("childAccess","true");
    this.showbutton = false;
  }

  ngOnDestroy(){
    localStorage.clear();
  }


}
