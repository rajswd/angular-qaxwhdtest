import { TestBed, ComponentFixture } from '@angular/core/testing';

import { SharedService } from '../service/shared.service';
import { Employee } from '../interface/interface';

describe('Test Service:  SharedService...', () => {

let service: SharedService;

beforeEach(() => {
  TestBed.configureTestingModule({});
  service = TestBed.get(SharedService);
});

it('Test - 1: Service should be created', () => {

  expect(service).toBeTruthy();
});

it("Test - 2 : At firest it's property deletedEmployeeList length should be zero.",() => {
    
    let deleteEmpList:number = service.getDeletedEmployeeList().length;
    expect(deleteEmpList).toEqual(0);
  });

  it("Test - 3 : At firest it's property employeeList length should be zero.",() => {
    
    let empList:number = service.getEmployeeList().length;
    expect(empList).toEqual(0);
  });

  it("Test - 4: Insert an employee object in deletedEmployeeList and length should be One.",() => {
    
    let employee:Employee = { employeeId: "Raj_123",
                              firstName: "Raj",
                              lastName: "Singh",
                              contact: "+60 183189606",
                              country: "Malaysia"};

    service.pushDeletedEmployeeDetail(employee);
    let deleteEmpList:number = service.getDeletedEmployeeList().length;
    expect(deleteEmpList).toEqual(1);
  });

  it("Test - 5 :  Insert an employee object in employeeList and length should be One.",() => {    
    
    let employee:Employee = { employeeId: "Raj_123",
                              firstName: "Raj",
                              lastName: "Singh",
                              contact: "+60 183189606",
                              country: "Malaysia"};

    service.pushEmployeeDetail(employee);
    let empList:number = service.getEmployeeList().length;
    expect(empList).toEqual(1);
  });



});
