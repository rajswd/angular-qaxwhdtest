import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Employee } from './../../../../../app/interface/interface';
import { SharedService } from './../../../../service/shared.service';


@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss']
})
export class ChildOneComponent implements OnInit, OnChanges {

  @Input() data:Employee;
  @Output() OnDelete:EventEmitter<Employee> = new EventEmitter<Employee>();

  employeeList:Array<Employee> = [];

  constructor( private sharedService:SharedService) { }

  ngOnInit() {
    this.employeeList = this.sharedService.getEmployeeList();
  }

  ngOnChanges(e){
    
    if(this.data && this.data.employeeId)
      this.employeeList.push(this.data);
    this.data = null;
  }

  onDeleteEvent(index){

    this.OnDelete.emit(this.employeeList.splice(index,1)[0]);
    this.sharedService.deletedEmployee(index);
  }

}