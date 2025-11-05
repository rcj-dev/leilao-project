import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ← adicione isso
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

interface ArtItem {
  lote: string;
  artista: string;
  dimensoes: string;
  tecnica: string;
  ano: string;
  doacao: string;
  imagem: string;
}

@Component({
  selector: 'app-exposicoes',
  templateUrl: './exposicoes.html',
  styleUrls: ['./exposicoes.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule]
})
export class Exposicoes {
  
baixarArquivo() {
  const link = document.createElement('a');
  link.href = 'CatalogoLeilaoETH.pdf';
  link.download = 'CatalogoLeilaoETH.pdf';
  link.click();
}
  currentIndex = 0;
  itemsPerPage = 2;

  arts: ArtItem[] = [
    {
      lote: 'Lote 12 – Subindo a Caraça, uma Escola animada',
      artista: 'Sérgio Tochner',
      dimensoes: '60 X 80 cm',
      tecnica: 'Acrílica sobre Tela',
      ano: '2025',
      doacao: 'Doação do próprio artista',
      imagem: 'assets/artes/lote12.png'
    },
    {
      lote: 'Lote 22 – Manhã no Vilarejo',
      artista: 'Helorisa Prado',
      dimensoes: '50 X 50 cm',
      tecnica: 'Acrílica sobre Tela',
      ano: '2025',
      doacao: 'Doação do próprio artista',
      imagem: 'assets/artes/lote22.png'
    },
    {
      lote: 'Lote 27 – Maria Fumaça em Tiradentes',
      artista: 'Jesus Ramos',
      dimensoes: '30 X 40 cm',
      tecnica: 'Óleo sobre Tela',
      ano: '2009',
      doacao: 'Emoldurada - Doação do próprio artista',
      imagem: 'assets/artes/lote27.png'
    },
    {
      lote: 'Lote 40 – Rio de Janeiro',
      artista: 'João Bosco Macedo',
      dimensoes: '30 X 30 cm',
      tecnica: 'Técnica Mista com Lascas e Cacos de Vidro sobre Madeira',
      ano: 'Sem informações sobre o ano',
      doacao: 'Emoldurada - Doação do próprio artista',
      imagem: 'assets/artes/lote40.png'
    },
    {
      lote: 'Lote 44 – Figuras',
      artista: 'Carmen Mascarenhas Tamm Renault',
      dimensoes: '50 X 60 cm',
      tecnica: 'Óleo sobre Tela',
      ano: 'Sem informações sobre o ano',
      doacao: 'Selo de participação no 3° Salão Nacional de Artes da PBH no verso - Doação de Naftale Katz',
      imagem: 'assets/artes/lote44.png'
    },
    {
      lote: 'Lote 36 – Africanas',
      artista: 'Fernando Lucchesi',
      dimensoes: '50 X 50 cm',
      tecnica: 'Técnica Mista sobre Madeira',
      ano: '2003',
      doacao: 'Doação de Gustavo Rozenbaum Bcheche',
      imagem: 'assets/artes/lote36.png'
    },
    {
      lote: 'Lote 25 – Sem Título',
      artista: 'Uziel Rozenwajn',
      dimensoes: '70 X 50 cm',
      tecnica: 'Acrílica sobre Tela',
      ano: '2025',
      doacao: 'Doação do própio artista',
      imagem: 'assets/artes/lote25.png'
    },
    {
      lote: 'Lote 18 – Entre Montanhas #01',
      artista: 'Israel Kislansky',
      dimensoes: '45 X 45x9 cm',
      tecnica: 'Escultura em Bronze e Madeira',
      ano: '2023',
      doacao: 'Doação do própio artista',
      imagem: 'assets/artes/lote18.png'
    },
    {
      lote: 'Lote 10 – A Lenda do Baal Schem',
      artista: 'Meire Levin',
      dimensoes: '40 X 30 cm',
      tecnica: 'Técnica mista sobre tela. Obra original que ilustra a página 16 do livro de mesmo nome escrito por Martin Buber traduzido para o português',
      ano: '2002',
      doacao: 'Doação do acerto familiar da artista',
      imagem: 'assets/artes/lote10.png'
    },
    {
      lote: 'Lote 03 – Parque',
      artista: 'Wagner Bottaro',
      dimensoes: '40 X 50 cm',
      tecnica: 'Óleo sobre Tela',
      ano: '2024',
      doacao: 'Emoldurada - Doação do próprio artista',
      imagem: 'assets/artes/lote03.png'
    },
    {
      lote: 'Lote 66 – Bananeira Brasileira',
      artista: 'Noemia Motta',
      dimensoes: '60 X 50 cm',
      tecnica: 'Óleo sobre Tela',
      ano: '1980',
      doacao: 'Doação de Jorge Bcheche',
      imagem: 'assets/artes/lote66.png'
    },
    {
      lote: 'Lote 54 – Subúrbio II',
      artista: 'Sergio Tochner',
      dimensoes: '30 X 40 cm',
      tecnica: 'Óleo sobre Tela',
      ano: '1997',
      doacao: 'Doação do próprio artista',
      imagem: 'assets/artes/lote54.png'
    },
    {
      lote: 'Lote 38 – Bandeira',
      artista: 'Jayme Reis',
      dimensoes: '20 X 20x5 cm',
      tecnica: 'Escultura em Ferro Pintado',
      ano: '2003',
      doacao: 'Doação do colecionador e galerista Rodrigo Ratton',
      imagem: 'assets/artes/lote38.png'
    },
    {
      lote: 'Lote 15 – Dohány I',
      artista: 'Leonardo Koroth',
      dimensoes: '45 X 60 cm',
      tecnica: 'Fotografia em Câmera Canon PRO 6000 impressa em papel Hahnemuhle Photo Rag Ultra Smooth 305 com pigmento Lucia EX PRO e Pefil de Cor Artmosphere',
      ano: '2025',
      doacao: 'Emoldurada - Doação do próprio artista, registro de sua visita à Sinagoga de Theodor Herzl em Budapeste, Hungria',
      imagem: 'assets/artes/lote15.png'
    },
    {
      lote: 'Lote 09 – Davi diante do Gigante',
      artista: 'Rogério Fernandes',
      dimensoes: '85 X 50 cm',
      tecnica: 'Acrílica sobre Madeira',
      ano: '2025',
      doacao: 'Emoldurada - Doação do próprio artista',
      imagem: 'assets/artes/lote09.png'
    },
    {
      lote: 'Lote 01 – Escola Theodor Herzl',
      artista: 'Wagner Bottaro',
      dimensoes: '30 X 40 cm',
      tecnica: 'Aquarela',
      ano: '2025',
      doacao: 'Emoldurada - Doação do próprio artista',
      imagem: 'assets/artes/lote01.png'
    },
    {
      lote: 'Lote 05 – Paisagem',
      artista: 'Carlos Macedo',
      dimensoes: '25 X 30 cm',
      tecnica: 'Acrílica sobre Eucatex',
      ano: '2020',
      doacao: 'Emoldurada - Doação do próprio artista',
      imagem: 'assets/artes/lote05.png'
    },
    {
      lote: 'Lote 21 – Anjo Arqueiro',
      artista: 'Chanina',
      dimensoes: '32 X 20 cm',
      tecnica: 'Grafite e Aguada sobre Papel',
      ano: 'Sem informações sobre o ano',
      doacao: 'Emoldurada - Doação do Colecionador Sérgio Pereira, obra 0185 de seu acervo',
      imagem: 'assets/artes/lote21.png'
    },
    {
      lote: 'Lote 35 – Sem Título',
      artista: 'Inimá de Paula',
      dimensoes: '36 X 50 cm',
      tecnica: 'Serigrafia Numerada (86/120)',
      ano: '1992',
      doacao: 'Emoldurada - Acompanha Certificado de Autenticidade - Doação de Gabriel Schvartzman Cohen',
      imagem: 'assets/artes/lote35.png'
    },
    {
      lote: 'Lote 48 – La Mer',
      artista: 'Xivá (Anna Cristina Reis Xavier)',
      dimensoes: '60 X 80 cm',
      tecnica: 'Acrílica sobre Tela',
      ano: '2024',
      doacao: 'Doação da própria artista',
      imagem: 'assets/artes/lote48.png'
    }
  ];

  // Navegação
ngOnInit() {
  this.updateItemsPerPage();
  window.addEventListener('resize', () => this.updateItemsPerPage());
}

updateItemsPerPage() {
  const width = window.innerWidth;
  if (width < 768) {
    this.itemsPerPage = 1; // celular
  } else {
    this.itemsPerPage = 2; // desktop e tablet
  }
}

prev() {
  if (this.currentIndex > 0) {
    this.currentIndex -= this.itemsPerPage;
  }
}

next() {
  if (this.currentIndex + this.itemsPerPage < this.arts.length) {
    this.currentIndex += this.itemsPerPage;
  }
}

getVisibleArts() {
  return this.arts.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
}

selectedArt: ArtItem | null = null;

openArtDetails(art: ArtItem) {
  this.selectedArt = art;
}

closeArtDetails() {
  this.selectedArt = null;
}
}