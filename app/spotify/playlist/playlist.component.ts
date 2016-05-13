import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../shared';

@Component({
  selector: 'playlist',
  templateUrl: 'app/songs/playlist-list/playlist-list.component.html'
})
export class PlaylistComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) { }

  playlists: string[];

  getPlaylists() {
    this.spotifyService.getPlaylists().then(playlists => this.playlists = playlists);
  }

  ngOnInit() {
    this.getPlaylists();
  }

}
