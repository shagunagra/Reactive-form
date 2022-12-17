import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeDataService } from 'src/app/services/employee-data.service';


@Component({
  selector: 'app-employee-data-table',
  templateUrl: './employee-data-table.component.html',
  styleUrls: ['./employee-data-table.component.scss']
})

export class EmployeeDataTableComponent implements OnInit {

  displayedColumns: string[] = ['fullName', 'address', 'dob', 'gender', 'phone', 'role'];
  employeeData: any;
  dataSource: any;

  constructor(private empData: EmployeeDataService) { }

  ngOnInit(): void {
    this.employeeData = this.empData.getEmployeeData;
    this.dataSource = new MatTableDataSource(this.employeeData);

  }

}
