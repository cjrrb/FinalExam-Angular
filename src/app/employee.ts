export class Employee {
  name: string;
  salary: number;
  employmentType: string;
  certified: boolean;

  public constructor(){
    this.name = '';
    this.salary = 0;
    this.employmentType = '';
    this.certified = false;
  }
}
