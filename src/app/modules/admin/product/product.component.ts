import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product.model';
import { ApiProductService } from 'src/app/services/product/api-product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private api: ApiProductService) { }

  ngOnInit(): void {
    this.getAll()
  }
  productionList: Product[] = [];
  getAll(){
    this.api.getProduct().subscribe((res: any) => {
      this.productionList = res
    })
    console.log(this.productionList)
  }
  onEdit(){

  }

}
