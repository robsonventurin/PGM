import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaAlunosService {

  constructor() { }

  public aluno_selecionado;

  public alunos = [
    {
      'nome': 'Robson Venturin',
      'imagem': 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      'nascimento': '14/06/1996',
      'matricula': '1203535',
      'biografia': 'Isso é um teste de biografia.',
    },
    {
      'nome': 'ANTHONY CRUZ',
      'imagem': 'https://sig.ifsc.edu.br/sigaa/verFoto?idFoto=294869&key=5c20fea666e8c7b63a040b1a5b32d441',
      'nascimento': '14/06/1996',
      'matricula': '1203535',
      'biografia': 'Isso é um teste de biografia.',
    },
    {
      'nome': 'LUCAS SCHISSEL',
      'imagem': 'https://sig.ifsc.edu.br/sigaa/verFoto?idFoto=300611&key=a41d77ca8408990cf22010f019587b3a',
      'nascimento': '14/06/1996',
      'matricula': '1203535',
      'biografia': 'Isso é um teste de biografia.',
    },
    {
      'nome': 'MOACIR HENRIQUE TOMCHAK PRATES',
      'imagem': 'https://sig.ifsc.edu.br/sigaa/verFoto?idFoto=294915&key=3598ba46bd55abdd4a452aa5d473a8ea',
      'nascimento': '14/06/1996',
      'matricula': '1203535',
      'biografia': 'Isso é um teste de biografia.',
    },
    {
      'nome': 'SAMUEL CARDOSO',
      'imagem': 'https://sig.ifsc.edu.br/sigaa/verFoto?idFoto=294929&key=5b2a3b819c370b84648abd373152d4e6',
      'nascimento': '14/06/1996',
      'matricula': '1203535',
      'biografia': 'Isso é um teste de biografia.',
    },
    {
      'nome': 'EDUARDO SILVERIO SCHWAMBACH',
      'imagem': 'https://sig.ifsc.edu.br/sigaa/verFoto?idFoto=294874&key=4482e8afa065e2821e475cd677c7d10e',
      'nascimento': '14/06/1996',
      'matricula': '1203535',
      'biografia': 'Isso é um teste de biografia.',
    },
    {
      'nome': 'LUCAS DE MATTOS',
      'imagem': 'https://sig.ifsc.edu.br/sigaa/verFoto?idFoto=294908&key=2e6b438577d34d08b2039e79f23f98fb',
      'nascimento': '14/06/1996',
      'matricula': '1203535',
      'biografia': 'Isso é um teste de biografia.',
    },
    {
      'nome': 'MARCOS GABRIEL FERNANDES',
      'imagem': 'https://sig.ifsc.edu.br/sigaa/img/no_picture.png',
      'nascimento': '14/06/1996',
      'matricula': '1203535',
      'biografia': 'Isso é um teste de biografia.',
    },
    {
      'nome': 'VINICIUS BORTOLINI',
      'imagem': 'https://sig.ifsc.edu.br/sigaa/verFoto?idFoto=294934&key=8f0228e93fb398bb7c7ae84a932867ca',
      'nascimento': '14/06/1996',
      'matricula': '1203535',
      'biografia': 'Representante da turma.',
    },
    {
      'nome': 'SAMUEL DA SILVA FEITOSA',
      'imagem': 'https://sig.ifsc.edu.br/sigaa/verFoto?idFoto=718357&key=f54a4a4fbf1a3b20ae6bd65bcd72c29b',
      'nascimento': '14/06/1996',
      'matricula': '1203535',
      'biografia': 'Docente do Instituto Federal de Santa Catarina, Câmpus Caçador.	',
    },
  ];
}
