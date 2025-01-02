import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';
import { FormsModule } from '@angular/forms';

//Componente HIJO
@Component({
  selector: 'product-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

@Input() product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0
  };

  //Crea un EventEmitter() 
  @Output() newProductEvent = new EventEmitter();

  onSubmit(): void {
    this.newProductEvent.emit(this.product); // <-- emite el product 
    console.log(this.product);
  }
}