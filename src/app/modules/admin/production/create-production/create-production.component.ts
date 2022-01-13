import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Production } from 'src/app/model/Production.model';
import { ProductionService } from 'src/app/services/production.service';

@Component({
  selector: 'app-create-production',
  templateUrl: './create-production.component.html',
  styleUrls: ['./create-production.component.css']
})
export class CreateProductionComponent implements OnInit {

  constructor(private api: ProductionService, private router: Router ) { }

  ngOnInit(): void {
  }
  productionForm = new FormGroup({
    name: new FormControl(''),
    company: new FormControl('')
  })

  production = new Production()

  onSubmit(){
    this.production.name = this.productionForm.value.name;
    this.production.company = this.productionForm.value.company;
    this.api.createProduction(this.production).subscribe((data: {}) => {
      alert("Success!!!!")
      this.router.navigate(['/production'])
    })
  }
}
