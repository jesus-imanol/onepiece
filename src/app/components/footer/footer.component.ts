import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  icons = [
    {img: "./assets/facebook.svg",linkTo: "https://www.facebook.com/onepieceofficial/?locale=es_LA"},
    {img: "./assets/ig.svg",linkTo: "https://github.com/jesus-imanol/"},
    {img: "./assets/git.svg", linkTo: "https://www.instagram.com/onepieceanimeofficial/?hl=es"}
  ]
  references = [
    {text: "ASISTENCIA"},
    {text: "TERMINOS DE USO"},
    {text: "POLITICA DE PRIVACIDAD"},
    {text: "CLASIFICACIONES DEL CONTENIDO"},
    {text: "DERECHOS DE AUTOR"},
    {text: "NORMAS DE LA COMUNIDAD"},
    
  ]

}
