import { Injectable } from '@angular/core';

import { PLAYLISTS } from './mock-playlists';

@Injectable()
export class SpotifyService {
  getPlaylists(){
    return Promise.resolve(PLAYLISTS);
  }
}
