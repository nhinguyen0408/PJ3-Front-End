import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.loadScript("../../../../../node_modules/bootstrap/dist/js/bootstrap.js");
    // this.loadScript("../../../../../node_modules/jquery/dist/jquery.js");
    // this.loadScript("../../../../assets/plugins/common/common.min.js");
    // this.loadScript("../../../../assets/js/custom.min.js");
    // this.loadScript("../../../../assets/js/settings.js");
    // this.loadScript("../../../../assets/js/gleek.js");
    // this.loadScript("../../../../assets/js/styleSwitcher.js");
    // this.loadScript("../../../../assets/plugins/chart.js/Chart.bundle.min.js");
    // this.loadScript("../../../../assets/plugins/circle-progress/circle-progress.min.js");
    // this.loadScript("../../../../assets/js/dashboard/dashboard-1.js");
  }
  ngAfterViewChecked():void{
    this.loadScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js");
    this.loadScript("https://cdn.datatables.net/1.11.3/js/jquery.dataTables.js");

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
