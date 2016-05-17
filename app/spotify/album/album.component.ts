import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { SpotifyService } from '../shared/spotify.service';
import { Album } from '../shared/album'

import { TrackComponent } from '../track/track.component';

@Component({
  selector: 'rs-album',
  templateUrl: 'app/spotify/album/album.component.html',
  directives: [TrackComponent]
})
export class AlbumComponent implements OnInit {

  constructor(private spotifyService: SpotifyService, private router: Router) { }

  albums: Album[];

  albumHref: string;
  artistUri: string = '0k17h0D3J5VfsdmQ1iZtE9';
  artistName: string = 'Pink Floyd';

  ngOnInit() {
    this.getAlbums();
  }

  updateArtist(){
    this.getAlbums();
  }

  getAlbums() {
    this.spotifyService.getAlbums(this.artistUri).then(albums => {
      this.albums = [];
      this.albums = albums;
    });
  }

  searchTrack() {
    this.spotifyService.albumHref = this.albumHref;
    this.router.navigate(['Track', { albumHref: this.albumHref }]);
  }
}
