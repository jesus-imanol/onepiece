import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './components/characters/characters.component';
import { ClipsComponent } from './components/clips/clips.component';
import { ReccommendationsComponent } from './components/reccommendations/reccommendations.component';
import { FooterComponent } from './components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent,CharactersComponent,ClipsComponent,ReccommendationsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'onepiece';
}
