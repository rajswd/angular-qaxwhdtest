import { Injectable } from '@angular/core';
import { Employee } from '../interface/interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private deletedEmployeeList:Array<Employee> = [];
  private employeeList:Array<Employee> = [];

  public behaviourSubject:BehaviorSubject<Array<Employee>>;

  constructor() {
    this.behaviourSubject = new BehaviorSubject(this.deletedEmployeeList);
   }

  pushDeletedEmployeeDetail(employee:Employee){
    this.deletedEmployeeList.push(employee); 
    this.behaviourSubject.next(this.deletedEmployeeList);   
  }

  pushEmployeeDetail(employee:Employee){
    this.employeeList.push(employee);    
  }

  getEmployeeList(){
    return JSON.parse(JSON.stringify(this.employeeList));
  }

  getDeletedEmployeeList(){
    return JSON.parse(JSON.stringify(this.deletedEmployeeList));
  }

  deletedEmployee(index:number){
    this.employeeList.splice(index,1);
  }
}
