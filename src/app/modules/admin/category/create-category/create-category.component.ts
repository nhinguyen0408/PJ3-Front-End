import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/Category.model';
import { ApiCategoryService } from 'src/app/services/category/api-category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(private api: ApiCategoryService, private router: Router ) { }

  ngOnInit(): void {
  }
  categoryForm = new FormGroup({
    name: new FormControl(''),
    title: new FormControl('')
  })

  category = new Category()

  onSubmit(){
    this.category.name = this.categoryForm.value.name;
    this.category.title = this.categoryForm.value.title;
    this.api.createCategory(this.category).subscribe((data: {}) => {
      alert("Success!!!!")
      this.router.navigate(['/admin/category'])
    })
  }

}
