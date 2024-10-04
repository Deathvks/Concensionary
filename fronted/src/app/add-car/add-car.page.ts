import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from '../services/car.service';
import { ToastController } from '@ionic/angular';  // Importar ToastController para retroalimentación visual

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.page.html',
  styleUrls: ['./add-car.page.scss'],
})
export class AddCarPage implements OnInit {

  carForm: FormGroup;

  constructor(private carService: CarService,
              public formBuider: FormBuilder,
              private toastController: ToastController  // Inyectar ToastController
  ) { 
    this.carForm = this.formBuider.group({
      brand: ['', Validators.compose([Validators.required])],
      model: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() { }

  createCar() {
    if (!this.carForm.valid) {
      console.log("It's not valid");
      return;
    }

    const brand = this.carForm.value.brand;
    const model = this.carForm.value.model;

    this.carService.create(brand, model).subscribe(async (response) => {
      console.log("Car created");

      this.carForm.reset();

    });
  }

  getFormControl(field: string) {
    return this.carForm.get(field);
  }
}
