import { TestBed, inject } from '@angular/core/testing';

import { NotificacaoService } from './notificacao.service';

describe('NotificacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificacaoService]
    });
  });

  it('should be created', inject([NotificacaoService], (service: NotificacaoService) => {
    expect(service).toBeTruthy();
  }));
});
