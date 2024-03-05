import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GifsService {
  constructor() {}

  private _tagsHistory: string[] = [];

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  public searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    this._tagsHistory.unshift(tag);
    console.log('tags history: ', this._tagsHistory);
  }
}
