import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { ContainerInicio } from './container-inicio/container-inicio';
import { DescEscola } from './desc-escola/desc-escola';
import { CountdownSeparateComponent } from './countdown.component/countdown.component';
import { SobreEvento } from './sobre-evento/sobre-evento';
import { Contato } from './contato/contato';
import { Footer } from './footer/footer';
import { Exposicoes } from './exposicoes/exposicoes';
import { Critico } from './critico/critico'

@Component({
  selector: 'app-root',
  imports: [
    Header,
    ContainerInicio,
    DescEscola,
    CountdownSeparateComponent,
    SobreEvento,
    Contato,
    Footer,
    Exposicoes,
    Critico
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('website-leilao');
}
