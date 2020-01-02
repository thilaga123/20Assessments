import { Injectable } from '@angular/core';
import { EmployeeObj } from './employeeobj';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  public employee: EmployeeObj[] = [];
}
