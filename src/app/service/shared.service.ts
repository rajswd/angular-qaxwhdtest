import { Injectable } from '@angular/core';
import { Employee } from '../interface/interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private deletedEmployeeList:Array<Employee> = [];
  private employeeList:Array<Employee> = [];

  constructor() {
   }

  pushDeletedEmployeeDetail(employee:Employee){
    this.deletedEmployeeList.push(employee); 
  }

  pushEmployeeDetail(employee:Employee){
    this.employeeList.push(employee);    
  }

  getEmployeeList():Array<Employee>{
    return JSON.parse(JSON.stringify(this.employeeList));
  }

  getDeletedEmployeeList():Array<Employee>{
    return JSON.parse(JSON.stringify(this.deletedEmployeeList));
  }

  deletedEmployee(index:number){
    this.employeeList.splice(index,1);
  }
}
