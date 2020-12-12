import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  public horas_trabalhadas;
  public valor_hora;
  public desconto;
  public descontos = [ 10, 20, 30 ];
  public salario_bruto;
  public total_desconto;
  public salario_liquido

  doCalculo() {
    if (!this.isNumber(this.valor_hora) || !this.isNumber(this.horas_trabalhadas) || this.desconto == null) {
      alert("Você precisa digitar valores numéricos e selecionar o desconto. O separador decimal é um ponto e não vírgula.");
      return;
    }

    this.salario_bruto = this.valor_hora * this.horas_trabalhadas;
    this.total_desconto = this.salario_bruto * (this.desconto / 100);

    this.salario_liquido = this.salario_bruto - this.total_desconto;
  }

  isNumber(value: string | number): boolean {
    return ((value != null) &&
            (value !== '') &&
            !isNaN(Number(value.toString())));
  }
}
