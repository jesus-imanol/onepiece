import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { title } from 'process';
import { CardAuthorsComponent } from '../card-authors/card-authors.component';

@Component({
  selector: 'app-reccommendations',
  standalone: true,
  imports: [CardComponent,CardAuthorsComponent,CommonModule],
  templateUrl: './reccommendations.component.html',
  styleUrl: './reccommendations.component.css'
})
export class ReccommendationsComponent {
  cards = [
    {
    img: "./assets/luffy5.svg",
    description: "LA TRANSFORMACIÓN DE LUFFY - GEAR 5"
    },
    {
      img: "./assets/zoro1.svg",
      description: "ZORO PROMETE NUNCA VOLVER A PERDER"
    },
    {
      img: "./assets/robin_ennies.svg",
      description: "ROBIN Y SU DESEO DE VIVIR"
    },
    {
      img: "./assets/nami_arlong.svg",
      description: "NAMI PIDE AYUDA"
    },
]
authorss = [
  {
    title: "Eiichiro Oda",
    description: "Nacido el 1 de enero de 1975 en la prefectura de Kumamoto es un mangaka japonés, conocido por ser el creador del manga One Piece.",
    img: "./assets/eiichiro.svg"
  },
  {
    title: "Toei Animation",
    description: "Toei Animation ha producido el anime de One Piece desde 1999, adaptando el manga con batallas épicas, aventuras emocionantes y momentos conmovedores.",
    img: "./assets/toei.svg"
  }
]

}
