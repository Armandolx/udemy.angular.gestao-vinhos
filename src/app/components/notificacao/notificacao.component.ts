import { Component, OnInit } from '@angular/core';

import { Notificacao} from '../../models/notificacao';
import { NotificacaoService } from './../../services/notificacao.service';

@Component({
  selector: 'app-notificacao',
  templateUrl: './notificacao.component.html',
  styleUrls: ['./notificacao.component.css']
})
export class NotificacaoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
