import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-card-authors',
  standalone: true,
  imports: [],
  templateUrl: './card-authors.component.html',
  styleUrl: './card-authors.component.css'
})
export class CardAuthorsComponent {
  @Input() authors = {
    title: "",
    description: "",
    img: "",
  }
}
