import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  piada: string = '';

  gerarPiada() {
    const piadas = [
      'Por que o JavaScript foi ao médico? Porque estava com muitos callbacks!',
      'Qual o cúmulo do programador? Ficar triste porque o crush deu um null nele.',
      'Como o dev chama o filho? Bugson.',
      'Por que o Angular não se perde? Porque sempre tem um router.'
    ];
    const index = Math.floor(Math.random() * piadas.length);
    this.piada = piadas[index];
  }
}
