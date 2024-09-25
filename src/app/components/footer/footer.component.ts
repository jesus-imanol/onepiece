import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  icons = [
    {img: "./assets/facebook.svg"},
    {img: "./assets/ig.svg"},
    {img: "./assets/git.svg"}
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
