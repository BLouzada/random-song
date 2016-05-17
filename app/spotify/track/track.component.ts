import { Component, OnInit, Input } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { SpotifyService } from '../shared/spotify.service';
import { Track } from '../shared/track'

@Component({
  selector: 'rs-track',
  templateUrl: 'app/spotify/track/track.component.html',
  providers: [SpotifyService]
})
export class TrackComponent implements OnInit {

  constructor(private routeParams: RouteParams, private spotifyService: SpotifyService) { }

  @Input()
  track: Track;

  ngOnInit() {
    this.spotifyService.getTrackFromAlbum(this.routeParams.get('albumHref')).subscribe(track => this.track = track);
  }

  goBack() {
    window.history.back();
  }

}
