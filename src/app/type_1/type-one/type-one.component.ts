import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';
import { Employee } from './../../src/app/interface/interface';
import {SharedService} from "./../../service/shared.service";

@Component({
  selector: 'app-type-one',
  templateUrl: './type-one.component.html',
  styleUrls: ['./type-one.component.scss']
})
export class TypeOneComponent implements OnInit {

  employee:FormGroup;
  isDeletedData:boolean = false;
  item:Employee;
  tmpObj:Employee;

  constructor(
              private fb:FormBuilder, 
              private sharedService:SharedService) { 

                    this.employee = this.fb.group({
                      employeeId: ["",[Validators.required]],
                      firstName: ["",[Validators.required]],
                      lastName: ["",[Validators.required]],
                      contact:["",[Validators.required]],
                      country: ["",[Validators.required]]
                    });

  }  

  ngOnInit() {
  
  }


  addToList(){
    
    this.item = this.employee.value;
    this.employee.reset();
    this.sharedService.pushEmployeeDetail(this.item);

  }

  reset(){
    this.employee.reset();
  }

  showDeletedEmployeeDtl(employee:Employee, isHidden:boolean){
    this.isDeletedData = isHidden;
    this.tmpObj = employee;
  }

  OnDelete(item:Employee){
    this.showDeletedEmployeeDtl(item,true);
    this.sharedService.pushDeletedEmployeeDetail(item);
   setTimeout(()=>{
       this.showDeletedEmployeeDtl(null, false);
   },3000);
  }
  
}

