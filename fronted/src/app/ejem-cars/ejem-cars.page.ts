import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-ejem-cars',
  templateUrl: './ejem-cars.page.html',
  styleUrls: ['./ejem-cars.page.scss'],
})
export class EjemCarsPage implements OnInit {

  concensionary: any = [];

  constructor(private carService: CarService) { }

  ngOnInit(){
    this.getAllCars();
  }

  getAllCars(){
    this.carService.getAll().subscribe(data => {
      console.log("Data has arrived");
      console.log(data);
      this.concensionary = data;
    });
  }

  deteleCar(id: any){
    this.carService.delete(id).subscribe(response => {
      this.getAllCars();
    });
  }

}
