import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../shared/spotify.service';

import { Album } from '../shared/album'

@Component({
  selector: 'album',
  templateUrl: 'app/spotify/album/album.component.html',
  providers: [ SpotifyService ]
})
export class AlbumComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  albums: Album[];

  albumHref: string;

  getAlbums() {
    this.spotifyService.getAlbums().then(albums => this.albums = albums);
  }

  ngOnInit() {
    this.getAlbums();
  }

  searchTrack(){
    this.spotifyService.getTrackFromAlbum(this.albumHref).subscribe(track => console.log(track));
  }

}
