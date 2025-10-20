import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AnimationBuilder, AnimationPlayer, style, animate } from '@angular/animations';

@Component({
  selector: 'app-container-inicio',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './container-inicio.html',
  styleUrls: ['./container-inicio.css']
})
export class ContainerInicio implements AfterViewInit {
  private player!: AnimationPlayer;

  constructor(private el: ElementRef, private builder: AnimationBuilder) {}

  ngAfterViewInit() {
    // Seleciona o container principal
    const element = this.el.nativeElement.querySelector('.fade-container');

    // Cria a animação
    const factory = this.builder.build([
      style({ opacity: 0 }),
      animate('1500ms ease-in', style({ opacity: 1 }))
    ]);

    // Cria o "player" e executa
    this.player = factory.create(element);
    this.player.play();
  }
}
