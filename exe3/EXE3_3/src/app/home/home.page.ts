import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListaAlunosService } from '../lista-alunos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public lista: ListaAlunosService, public router: Router) {

  } 

  abrirAluno(aluno: any) {
    this.lista.aluno_selecionado = aluno;
    this.router.navigate(["/aluno"]);
  }

}
