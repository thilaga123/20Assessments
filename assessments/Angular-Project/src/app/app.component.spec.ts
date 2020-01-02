import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('AppComponent', () => {
  let component;
  class routerEventMock{
    public ne = new NavigationEnd(0, 'http://localhost:4200/employees/1', 'http://localhost:4200/employees/new');
    public events = new Observable(observer => {
      observer.next(this.ne);
      observer.complete();
    });
    public url = '/employees/new';
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[{
        provide:Router,useClass:routerEventMock 
      }],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  const fixture = TestBed.createComponent(AppComponent);

  component = fixture.componentInstance;
  fixture.detectChanges();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
  
  it('constructor should set background addemployee tab', () => {
    component.ngAfterViewInit();
    expect(component.employeeref.nativeElement.style.backgroundColor).toBe("rgb(3, 169, 244)");
    expect(component.addemployeeref.nativeElement.style.backgroundColor).toBe("blue");
  });

  it('constructor should set background employee tab ', () => {
    spyOn(component.router,'url').and.returnValue('/employees/0');
    component.ngAfterViewInit();
    expect(component.employeeref.nativeElement.style.backgroundColor).toBe("blue");
    expect(component.addemployeeref.nativeElement.style.backgroundColor).toBe("rgb(3, 169, 244)");
  });
});
