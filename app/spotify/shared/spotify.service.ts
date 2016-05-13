import { Injectable } from '@angular/core';

import { PLAYLISTS } from './mock-playlists';

@Injectable()
export class SpotifyService {
  getPlaylists(){
    //console.log(PLAYLISTS);
    return Promise.resolve(PLAYLISTS);
  }
}
