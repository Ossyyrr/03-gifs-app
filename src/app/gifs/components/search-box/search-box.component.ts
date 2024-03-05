import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild('txtTagInput') // Referencia del input #txtTagInput
  public tagInput!: ElementRef<HTMLInputElement>;

  searchTag() {
    const tag = this.tagInput.nativeElement.value;
    console.log(tag);
    this.gifsService.searchTag(tag);
    this.tagInput.nativeElement.value = '';
  }
}
