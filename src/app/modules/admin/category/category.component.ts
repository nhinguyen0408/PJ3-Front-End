import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/Category.model';
import { ApiCategoryService } from 'src/app/services/category/api-category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private api: ApiCategoryService) { }

  ngOnInit(): void {
    this.getAll()
  }
  categoryList: Category[] = [];
  getAll(){
    this.api.getCategory().subscribe((res: any) => {
      this.categoryList = res
    })
    console.log(this.categoryList)
  }

}
