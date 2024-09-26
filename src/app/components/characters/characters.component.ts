import { Component, AfterViewInit, ChangeDetectorRef } from '@angular/core'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
})
export class CharactersComponent implements AfterViewInit {
  imgs = [ 
    {
     img:"./assets/luff_nico.svg"
    },
    {
      img:"./assets/luffy_bandace.svg"
    },
    {
      img:"./assets/lufy_hungry.svg"
    },
    {
      img:"./assets/luffy_shanks.svg"
    },
  ]
  characters = [
    {
      name: "Monkey D. Luffy",
      description: "Nació el 5 de mayo. Al debutar, tenía 17 años, pero después del salto temporal en la historia, cumplió 19 años.",
      img: "./assets/luffyc.svg"
    },
    {
      name: "Roronoa Zoro",
      description: "Roronoa Zoro, conocido como El Cazador de Piratas, es el primer pirata que se unió a Monkey D. Luffy, y el principal combatiente de los Piratas de Sombrero de Paja.",
      img: "./assets/zoro.svg"
    },
    {
      name: "Nami",
      description: "Nami es la navegante de los Piratas de Sombrero de Paja, y su sueño es dibujar un mapa completo del mundo.",
      img: "./assets/namic.svg"
    },
    {
      name: "Usopp",
      description: "Usopp es el francotirador de la tripulación. Tiene una gran imaginación y su sueño es ser un valiente guerrero del mar.",
      img: "./assets/usopc.svg"
    },
    {
      name: "Vinsmoke Sanji",
      description: "Sanji es el cocinero de los Piratas de Sombrero de Paja. Sueña con encontrar el legendario All Blue.",
      img: "./assets/sanjic.svg"
    },
    {
      name: "Tony Tony Chopper",
      description: "Chopper es el médico de la tripulación. Es una reno que comió la Hito Hito no Mi, lo que le da la capacidad de transformarse.",
      img: "./assets/choperc.svg"
    },
    {
      name: "Nico Robin",
      description: "Robin es la arqueóloga de los Piratas de Sombrero de Paja. Su objetivo es descubrir la verdadera historia del siglo vacío.",
      img: "./assets/robinc.svg"
    },
    {
      name: "Franky",
      description: "Franky es el carpintero de la tripulación, responsable de construir y mantener el Thousand Sunny.",
      img: "./assets/frankyc.svg"
    },
    {
      name: "Soul King, Brook",
      description: "Brook es el músico de los Piratas de Sombrero de Paja. Es un esqueleto que regresó a la vida gracias a la Yomi Yomi no Mi.",
      img: "./assets/brookc.svg"
    },
    {
      name: "Jinbe",
      description: "Jinbe es el timonel de los Piratas de Sombrero de Paja. Es un hombre-pez y un maestro del Karate Gyojin.",
      img: "./assets/jinbeic.svg"
    }
  ];
  
 currentIndex = 0;

 constructor(private cdr: ChangeDetectorRef) { }

 nextCharacter() {
   this.currentIndex = (this.currentIndex + 1) % this.characters.length;
 }

 get currentCharacter() {
   return this.characters[this.currentIndex];
 }

 ngAfterViewInit() {
   this.cdr.detectChanges();
 }
}
