import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Vinho } from './../../models/vinho';

import { VinhosService } from './../../services/vinhos.service';
import { NotificacaoService } from './../../services/notificacao.service';

@Component({
  selector: 'vinhos',
  templateUrl: './vinhos.component.html',
  styleUrls: ['./vinhos.component.css']
})
export class VinhosComponent implements OnInit {

  vinhos: Array<Vinho>;
  vinhoSelecionado: Vinho;

  constructor(public vinhosService: VinhosService, public router: Router, public notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.listar();
  }

  private listar() {
    this.vinhosService.listar()
      .then((vinhos: Array<Vinho>) => {
        this.vinhos = vinhos;
      }).catch((error: any) => {
        console.log(error);
      });
  }

  visualizar() {
    this.router.navigate(['/detalhes-vinho', this.vinhoSelecionado.id]);
  }

  edit(vinho: Vinho){
    this.vinhoSelecionado = vinho;
    this.router.navigate(['cadastro-vinho', this.vinhoSelecionado.id]);
  }

  remove(vinho: Vinho){
    this.vinhoSelecionado = vinho;
    this.vinhosService.remover(this.vinhoSelecionado.id)
      .then(response => {
        this.notificacaoService.warning('Vinho removido com sucesso!');
        this.listar();
      }).catch(erro => console.log(erro));
  }

}
