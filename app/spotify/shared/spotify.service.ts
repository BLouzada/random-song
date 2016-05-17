import { Injectable } from '@angular/core';
import { Http, HTTP_PROVIDERS, Response } from '@angular/http';
import { Component } from '@angular/core';

import { Observable } from 'rxjs/Rx';

import { Album } from './album'
import { Track } from './track'

@Component({
  providers: [HTTP_PROVIDERS]
})
@Injectable()
export class SpotifyService {

  albums: Album[] = [];

  albumHref: string;

  constructor(private http: Http) { }

  getAlbums(artistUri: string) {
    this.http.get('https://api.spotify.com/v1/artists/' + artistUri + '/albums').subscribe(res => {
      if(this.albums.length)
        this.albums = [];
      for (let album of res.json().items) {
        let alb = new Album();
        alb.href = album.href;
        alb.name = album.name;
        this.albums.push(alb);
      }
    });
    return Promise.resolve(this.albums);
  }


  getTrackFromAlbum(albumHref: string): Observable<Track> {
    return this.http.get(albumHref).map(this.mapToTrack).catch(this.handleError);
  }

  private mapToTrack(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Response status: ' + res.status);
    }
    let tracks = res.json().tracks.items;
    let randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
    let track = new Track();
    track.name = randomTrack.name;
    track.openOnSpotify = randomTrack.external_urls.spotify;
    return track;
  }

  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.log(errMsg);
    return Observable.throw(errMsg);
  }
}
