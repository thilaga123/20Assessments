import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";

import { AddEmployeeComponent } from "./add-employee.component";
import { AppService } from "../app.service";
import { Router } from "@angular/router";

describe("AddEmployeeComponent", () => {
  let employeeValue = {
    name: "name",
    age: 18,
    email: "email@mail.com"
  };
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;
  let service;
  class mockAppService {
    public employee: any = [employeeValue];
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddEmployeeComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [
        { provide: AppService, useClass: mockAppService },
        {
          provide: Router,
          useValue: {
            url: "/employees/0"
          }
        }
      ]
    }).compileComponents();
    service = TestBed.get(AppService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("Form value should have been prefilled", () => {
    expect(component.form.value).toEqual(employeeValue);
  });
  it("onSubmit should edit the value", () => {
    spyOn(component.form, "reset");
    component.onSubmit();
    expect(service.employee[0]).toEqual(employeeValue);
    expect(component.form.reset).toHaveBeenCalled();
  });
  it("onSubmit should not add value when form is invalid", () => {
    component.param = undefined;
    component.onSubmit();
    expect(component.form.valid).toEqual(false);
  });
  it("onSubmit should add value when form is valid", () => {
    component.param = undefined;
    let addValue = {
      name: "new name",
      age: 18,
      email: "email@mail.com"
    }
    spyOn(component.form, "reset");
    component.form.patchValue(addValue);
    component.onSubmit();
    expect(component.form.valid).toEqual(true);
    expect(service.employee[1]).toEqual(addValue);
    expect(component.form.reset).toHaveBeenCalled();
  });
});
