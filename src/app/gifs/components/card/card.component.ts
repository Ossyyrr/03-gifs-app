import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gif-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input()
  public gifChild!: Gif;

  ngOnInit(): void {
    if (!this.gifChild) {
      throw new Error('gifChild is required');
    }
  }
}
