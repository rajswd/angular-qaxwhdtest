import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-type-seven',
  templateUrl: './type-seven.component.html',
  styleUrls: ['./type-seven.component.scss']
})
export class TypeSevenComponent implements OnInit {

  errorModel:any = {
    name:false,
    email:false
  };

  @ViewChild("email", {static:true}) email:ElementRef;
  @ViewChild("name",  {static:true}) name:ElementRef;
  
  constructor() { }


  ngOnInit() {
  }

  validate(){
    this.errorModel.name = !this.name.nativeElement.checkValidity()
    this.errorModel.email = !this.email.nativeElement.checkValidity();

  }

}
