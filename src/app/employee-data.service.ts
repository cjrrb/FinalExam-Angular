import { Injectable } from '@angular/core';
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  employee: Employee = new Employee();

  constructor() { }
}
