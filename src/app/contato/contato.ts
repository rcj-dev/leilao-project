import {Component} from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contato',
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, MatMenuModule, MatIconModule, MatButtonModule],
  templateUrl: './contato.html',
  styleUrl: './contato.css'
})
export class Contato {

}
