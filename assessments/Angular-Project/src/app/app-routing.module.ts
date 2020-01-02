import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
//import { HomeComponent } from './home/home.component';     // Add your component here
//import { AboutComponent } from './about/about.component';  // Add your component here

//This is my case 
const routes: Routes = [
    {
        path: 'employees/new',
        component: AddEmployeeComponent
    },
    {
        path: 'employees',
        component: EditEmployeeComponent
    },
    {
       path: 'employees/:id',
       component:AddEmployeeComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
