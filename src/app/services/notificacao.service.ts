import { Injectable } from '@angular/core';
import { Notificacao } from '../models/notificacao';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class NotificacaoService {

  public _notificacoes: Subject<Notificacao> = new Subject<Notificacao>();

  constructor() { }

  public success (mensagem: string){
    this.adicionar(mensagem, 'alert-success');
  }

  public warning (mensagem: string){
    this.adicionar(mensagem, 'alert-warning');
  }

  public informacao (mensagem: string){
    this.adicionar(mensagem, 'alert-info');
  }

  public danger (mensagem: string){
    this.adicionar(mensagem, 'alert-danger');
  }

  private adicionar (mensagem: string, tipo: string){
    let notificacao: Notificacao = new Notificacao();
    notificacao.mensagem = mensagem;
    notificacao.tipo = tipo;
    this._notificacoes.next(notificacao);
  }

  public obterNotificacoes(){
    return this._notificacoes.asObservable();
  }

}
