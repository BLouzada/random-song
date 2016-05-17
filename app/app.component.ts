import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AlbumComponent } from './spotify/album/album.component';
import { TrackComponent } from './spotify/track/track.component';
import { AppSettings } from './app.settings';

@Component({
  selector: 'random-song',
  template: `
  <h1>{{title}}</h1>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([{
  path: '/album',
  name: 'Album',
  component: AlbumComponent,
  useAsDefault: true
}, {
    path: '/track',
    name: 'Track',
    component: TrackComponent
  }])
export class AppComponent {
  title = 'Random Song of ' + AppSettings.ARTIST_NAME;
}
