import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { SpotifyService } from '../shared/spotify.service';
import { Album } from '../shared/album'

import { TrackComponent } from '../track/track.component';

@Component({
  selector: 'rs-album',
  templateUrl: 'app/spotify/album/album.component.html',
  providers: [SpotifyService],
  directives: [TrackComponent]
})
export class AlbumComponent implements OnInit {

  constructor(private spotifyService: SpotifyService, private router: Router) { }

  albums: Album[];

  albumHref: string;

  getAlbums() {
    this.spotifyService.getAlbums().then(albums => this.albums = albums);
  }

  ngOnInit() {
    this.getAlbums();
  }

  searchTrack() {
    this.spotifyService.albumHref = this.albumHref;
    this.router.navigate(['Track', {albumHref: this.albumHref}]);
  }
}
