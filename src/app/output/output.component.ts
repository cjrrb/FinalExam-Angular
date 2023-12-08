import { Component } from '@angular/core';
import {Employee} from "../employee";
import {EmployeeDataService} from "../employee-data.service";

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrl: './output.component.css'
})
export class OutputComponent {
  title = 'Output';
  public employmentType = [
    "Permanent",
    "Part-time",
    "Seasonal"
  ];
  public employee: Employee;

  public constructor(dataService: EmployeeDataService) {
    this.employee = dataService.employee;
  }

  isCertifiedString(certified: boolean): string {
    return certified ? 'Yes' : 'No';
  }
}
