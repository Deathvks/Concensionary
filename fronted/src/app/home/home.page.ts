import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  brand: string = "Audi";
  model: string = "A3 Sportback";
  brand2: string = "Toyota";
  model2: string = "G6";
  brand3: string = "Hyundai";
  model3: string = "i20n";
  brand4: string = "Hyundai";
  model4: string = "i30n Performance";

  constructor(private router: Router) {}
  goToEjemCars(){
    this.router.navigateByUrl("/ejem-cars")
  }
}
