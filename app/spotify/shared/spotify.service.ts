import { Injectable } from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import { Component } from '@angular/core';

import { Album } from './album'

@Component({
  providers: [HTTP_PROVIDERS]
})
@Injectable()
export class SpotifyService {

  albums: Album[] = [];
  track: Object;

  constructor(private http: Http) { }

  getAlbums() {
    this.http.get('https://api.spotify.com/v1/artists/0k17h0D3J5VfsdmQ1iZtE9/albums').subscribe(res => {
      for (let album of res.json().items) {
        let alb = new Album();
        alb.href = album.href;
        alb.name = album.name;
        this.albums.push(alb);
      }
    });

    return Promise.resolve(this.albums);
  }

  getSongsFromAlbum(albumHref: string) {
    this.http.get(albumHref).subscribe(res => {
      let tracks = res.json().tracks.items;
      this.track = tracks[Math.floor(Math.random() * tracks.length)];
      console.log(this.track);
    });
    return Promise.resolve(this.track);
  }
}
