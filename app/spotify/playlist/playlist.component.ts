import { Component, OnInit } from '@angular/core';

import { SpotifyService } from '../shared/spotify.service';

@Component({
  selector: 'playlist',
  templateUrl: 'app/spotify/playlist/playlist.component.html',
  providers: [ SpotifyService ]
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
