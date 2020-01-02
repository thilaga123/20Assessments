import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('employeeref',{static:true}) employeeref:ElementRef;
  @ViewChild('addemployeeref',{static:true}) addemployeeref:ElementRef;

  constructor(private router: Router ){
   
  }

  ngAfterViewInit() {
    this.router.events.subscribe(event => {
      if(event.constructor.name === "NavigationEnd") {
        if(this.router.url == '/employees/new'){
          this.addemployeeref.nativeElement.style.backgroundColor = 'blue';
          this.employeeref.nativeElement.style.backgroundColor ='#03a9f4';
        }
        else{
          this.employeeref.nativeElement.style.backgroundColor = 'blue';
          this.addemployeeref.nativeElement.style.backgroundColor = '#03a9f4';
        }
      }
    });
  }
}
