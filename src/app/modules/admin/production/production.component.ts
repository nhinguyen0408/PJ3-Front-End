import { Component, OnInit } from '@angular/core';
import { Production } from 'src/app/model/Production.model';
import { ProductionService } from 'src/app/services/production.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {

  constructor(private api: ProductionService) { }

  ngOnInit(): void {
    this.getAll()
  }
  productionList: Production[] = [];
  getAll(){
    this.api.getProduction().subscribe((res: any) => {
      this.productionList = res
    })
    console.log(this.productionList)
  }
  onEdit(){

  }
}
