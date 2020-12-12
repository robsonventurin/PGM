import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaAlunosService } from '../lista-alunos.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {

  constructor(public lista: ListaAlunosService, public router: Router) {

  } 
  
  ngOnInit() {
    if (this.lista.aluno_selecionado == null)
    this.router.navigateByUrl('/home');
  }

}
