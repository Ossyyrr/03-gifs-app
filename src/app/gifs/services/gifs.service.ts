import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {
  constructor(private http: HttpClient) {
    this.loadLocalStorage();
    if (this._tagsHistory.length > 0) this.searchTag(this._tagsHistory[0]);
  }

  private _tagsHistory: string[] = [];
  public gifList: Gif[] = [];
  private serviceUrl = 'https://​api.giphy.com/v1/gifs/search';
  private _api_key: string = 'ZcsmOc8g2olhiwyhz5UAVtNQSalIpyXI';

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((t) => t !== tag);
    }
    this._tagsHistory.unshift(tag);

    this._tagsHistory = this._tagsHistory.splice(0, 10); // limitar a 10
    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage(): void {
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!) || [];
  }

  public searchTag(tag: string): void {
    if (tag.trim().length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this._api_key)
      .set('q', tag)
      .set('limit', '10');

    this.http
      .get<SearchResponse>(this.serviceUrl, { params })
      .subscribe((resp) => {
        this.gifList = resp.data;
        console.log(this.gifList);
      });
  }
}
