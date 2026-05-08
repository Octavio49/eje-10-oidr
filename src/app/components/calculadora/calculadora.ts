import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrl: './calculadora.css',
})
export class Calculadora {
  resultado=0;
  n1 = 0;
  n2 = 0;

  sumar(){
    this.resultado = this.n1 + this.n2
  }

  restar(){
    this.resultado = this.n1 - this.n2
  }

  multiplicar(){
    this.resultado = this.n1 * this.n2
  }

  dividir(){
    this.resultado = this.n1/this.n2
  }
}
