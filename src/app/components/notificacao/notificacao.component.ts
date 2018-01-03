import { Component, OnInit } from '@angular/core';

import { Notificacao} from '../../models/notificacao';
import { NotificacaoService } from './../../services/notificacao.service';

@Component({
  selector: 'notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  notificacao: Notificacao;
  visivel: boolean = false;

  constructor(private notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.notificacaoService.obterNotificacoes().subscribe((notificacao: Notificacao) => {
      this.notificacao = notificacao;
      this.visivel = true;
      setTimeout(() => {
        this.visivel = false;
      }, 2000);
    });
  }

  tipoAlerta() {
    return this.notificacao.tipo;
  }

}
