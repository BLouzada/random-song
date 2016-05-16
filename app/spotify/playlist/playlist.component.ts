import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../shared/spotify.service';

import { Album } from '../shared/album'

@Component({
  selector: 'playlist',
  templateUrl: 'app/spotify/playlist/playlist.component.html',
  providers: [ SpotifyService ]
})
export class PlaylistComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  albums: Album[];

  albumHref: string;

  getPlaylists() {
    this.spotifyService.getAlbums().then(albums => this.albums = albums);
  }

  ngOnInit() {
    this.getPlaylists();
  }

  searchSong(){
    this.spotifyService.getSongsFromAlbum(this.albumHref).then(track => console.log(track));
  }

}
