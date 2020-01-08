import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedService } from 'src/app/service/shared.service';
import { Employee } from 'src/app/interface/interface';


@Component({
  selector: 'app-type-four',
  templateUrl: './type-four.component.html',
  styleUrls: ['./type-four.component.scss']
})
export class TypeFourComponent implements OnInit {

  employeeList:Array<Employee>
  constructor(private sharedService:SharedService) { }
  ngOnInit() {
    this.employeeList = this.sharedService.getDeletedEmployeeList();
  }
}
