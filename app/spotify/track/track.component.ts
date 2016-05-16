import { Component, OnInit } from '@angular/core';

import { RouteParams } from '@angular/router-deprecated';

import { SpotifyService } from '../shared/spotify.service';

@Component({
  selector: 'rs-track',
  templateUrl: 'app/spotify/track/track.component.html',
  providers: [SpotifyService]
})
export class TrackComponent implements OnInit {

  constructor(private routeParams: RouteParams, private spotifyService: SpotifyService) { }

  openOnSpotify: string;

  ngOnInit() {
    let albumHref = this.routeParams.get('albumHref');
    this.spotifyService.getTrackFromAlbum(albumHref).subscribe(track => this.openOnSpotify = track.openOnSpotify);
  }

}
