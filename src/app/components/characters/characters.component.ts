import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
  animations: [
    trigger('fadeIn', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate('0.5s ease-in')
      ]),
      transition(':leave', [
        animate('0.5s ease-out')
      ])
    ])
  ]
})
export class CharactersComponent {
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
  characters = [{
    name: "Monkey D. Luffy",
    description:"Nació el 5 de mayo. Al debutar, tenía 17 años, pero después del salto temporal en la historia, cumplió 19 años.",
    img:"./assets/luffy.png"
  },
  {
    name: "Zoro Roronoa",
    description:"Roronoa Zoro,conocido como El Cazador de Piratas, es el primer pirata que se unió a Monkey D. Luffy, y el principal combatiente de los Piratas de Sombrero de Paja,",
    img:"./assets/zoro.svg"
  }
 ]
 currentIndex = 0;

 nextCharacter() {
   this.currentIndex = (this.currentIndex + 1) % this.characters.length;
 }
 get currentCharacter() {
   return this.characters[this.currentIndex];
 }
}