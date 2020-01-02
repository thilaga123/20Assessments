import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { EmployeeObj } from '../employeeobj';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

form: FormGroup;
submitted:boolean = false;
param :string = '';
constructor(private fb:FormBuilder, private service : AppService, private route: Router) { }

ngOnInit() {
  this.setForm();
  console.log(this.route.url)
  if(this.route.url != '/employees/new'){
    this.param = this.route.url.split("/")[2];
let num = parseInt(this.param);
    this.form.patchValue(this.service.employee[num] );
    
  }
  else{
    
  }
}

setForm():void{
  this.form = this.fb.group({
    name: [null, Validators.required],
    age: [null,[Validators.required]],
    email: [null, Validators.required]
  });
}

hasError(controlName, validationName){
  return this.form.get(controlName).hasError(validationName) && (this.form.get(controlName).touched || this.submitted);
}

onSubmit():void{
  this.submitted = true;
  console.log("this.form.value",this.form.value);

  if(this.param){
    if(this.form.valid){
      this.service.employee[this.param]= this.form.value;
      this.form.reset();
      this.submitted = false;
      console.log(this.service.employee);
    }
  }else{

    if(this.form.valid){
      let size = this.service.employee.length;
      this.service.employee[size]= this.form.value;
      this.form.reset();
      this.submitted = false;
      console.log(this.service.employee);
    }
  }
}

}