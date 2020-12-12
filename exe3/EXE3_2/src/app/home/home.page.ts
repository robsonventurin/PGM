import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public peso;
  public altura;
  public imc
  public color;
  public situacao;

  doCalculo() {
    if (!this.isNumber(this.peso) || !this.isNumber(this.altura)) {
      alert("Você precisa digitar valores numéricos. O separador decimal é um ponto e não vírgula.");
      return;
    }

    this.imc = ((this.peso) / ((this.altura / 100) * (this.altura / 100)));
    if (this.imc < 18.5) {
      this.situacao = 'Você está abaixo do peso ideal';
      this.color = "warning";
    }else if (this.imc < 25) {
      this.situacao = 'Parabéns, você está em seu peso normal';
      this.color = "success";
    }else if (this.imc < 30) {
      this.situacao = 'Você está acima do seu peso (sobrepeso)';
      this.color = "warning";
    }else if (this.imc < 35) {
      this.situacao = 'Obesidade de grau 1';
      this.color = "warning";
    }else if (this.imc < 40) {
      this.situacao = 'Obesidade de grau 2';
      this.color = "danger";
    }else if (this.imc >= 40) {
      this.situacao = 'Obesidade de grau 3';
      this.color = "danger";
    }
  }

  isNumber(value: string | number): boolean {
    return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
  }
}
