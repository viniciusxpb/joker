import { Component } from '@angular/core';
import { PiadaService } from '@services/piada.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  piada: string = '';
  textoInput: string = '';
  categoriaSelecionada: string = '';

  constructor(private piadaService: PiadaService) {}

  ngOnInit() {
    this.categoriaSelecionada = '';
  }

  trocarCategoria() {
    if (this.categoriaSelecionada !== 'texto') {
      this.textoInput = '';
    }
  }

  gerarPiada() {
    const topico = this.categoriaSelecionada === 'texto'
      ? this.textoInput.trim()
      : this.categoriaSelecionada;

    if (!topico) {
      this.piada = 'Selecione uma categoria ou digite um texto.';
      return;
    }

    this.piadaService.buscarPiada(topico).subscribe({
      next: (res) => {
        this.piada = res.piada || 'Nenhuma piada encontrada.';
      },
      error: () => {
        this.piada = 'Erro ao buscar piada. Talvez o backend esteja rindo demais.';
      }
    });
  }

  gerarPiadaMock() {
    const piadas: { [key: string]: string[] } = {
      aleatoria: [
        'Por que o JavaScript foi ao médico? Porque estava com muitos callbacks!',
        'Como o dev chama o filho? Bugson.',
        'Por que o Angular não se perde? Porque sempre tem um router.',
        'O que o HTML disse para o CSS? Você me estiliza!',
        'Por que o programador levou um café pro computador? Porque ele estava com Java.'
      ],
      top10: [
        'Criei um app que conta piadas… mas ninguém baixa. Deve ser porque é só piada interna.',
        'Usei tanto `!important` que minha esposa foi embora e não voltou mais.',
        'Coloquei minha fé no código… deu `undefined`.',
        'Meu código funciona… até alguém usar.',
        'Pedi conselhos pro Stack Overflow… agora tô na terapia.'
      ],
      texto: [
        'Um programador entra num bar. Pede 1 cerveja. Pede 0 cervejas. Pede 9999999 cervejas. Pede uma cobra. Pede -1 cervejas. Pede uma torradeira.',
        'Na vida real, o amor é async e o retorno é sempre uma Promise que nunca resolve.',
        'No final, tudo é apenas um `console.log()` no vazio esperando atenção.'
      ]
    };

    const categoria = this.categoriaSelecionada || 'aleatoria';
    const lista = piadas[categoria] || piadas['aleatoria'];
    const index = Math.floor(Math.random() * lista.length);
    this.piada = lista[index];
  }
}
