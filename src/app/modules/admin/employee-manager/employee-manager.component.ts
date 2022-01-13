import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-manager',
  templateUrl: './employee-manager.component.html',
  styleUrls: ['./employee-manager.component.css']
})
export class EmployeeManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewChecked():void{
    // this.loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js");
    // this.loadScript("https://cdn.datatables.net/1.11.3/js/jquery.dataTables.js");

  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}
