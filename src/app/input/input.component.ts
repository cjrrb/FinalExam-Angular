import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../employee";
import {Router} from "@angular/router";
import {EmployeeDataService} from "../employee-data.service";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  public title = 'Input';
  public employmentTypes = [
    "Permanent",
    "Part-Time",
    "Seasonal"
  ];
  public form: FormGroup;
  public employee: Employee;
  private router: Router;

  public constructor(private dataService: EmployeeDataService, router: Router) {
    this.employee = dataService.employee;
    this.router = router;

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      salary: new FormControl('', Validators.required),
      employmentType: new FormControl('', Validators.required),
      certified: new FormControl(false)
    });
  }

  public send(data: Employee) {
    this.employee.name = data.name;
    this.employee.salary = data.salary;
    this.employee.employmentType = data.employmentType;
    this.employee.certified = data.certified;
    this.router.navigate(['output']).then(() => {
      console.log('displaying output data');
      console.log(data);
    });
  }
  ngOnInit(): void {
  }
}
