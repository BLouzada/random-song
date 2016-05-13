import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PlaylistComponent } from './spotify';

@Component({
  selector: 'random-song',
  template: `
  <h1>{{title}}</h1>
  <p>Initial Commit</p>
  <router-outlet></router-outlet>
  `,
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ ROUTER_PROVIDERS ]
})
@RouteConfig([{
  path: '/playlist',
  name: 'Playlist',
  component: PlaylistComponent,
  useAsDefault: true
}])
export class AppComponent {
  title = 'Random Song';
}
