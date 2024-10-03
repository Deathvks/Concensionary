import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejem-cars',
  templateUrl: './ejem-cars.page.html',
  styleUrls: ['./ejem-cars.page.scss'],
})
export class EjemCarsPage implements OnInit {

  cars: any = [
    {
      id: 1,
      brand: "Audi",
      model: "A3 Sportback"
    },
    {
      id: 2,
      brand: "Toyota",
      model: "G6"
    },
    {
      id: 3,
      brand: "Hyundai",
      model: "i20N"
    },
    {
      id: 4,
      brand: "Hyundai",
      model: "i30N"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
