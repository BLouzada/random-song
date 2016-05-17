## random-song // [Desenvolvimento Web I] [LaSalle Canoas](http://unilasalle.edu.br/canoas/)

To check it running: [access on heroku](http://random-song.herokuapp.com)

To run local you'll need:

* [Node.JS](https://nodejs.org/en/download/)

After install Node, run:

`npm install` - It'll install dependencies that are described in [package.json](https://github.com/ndeitch/random-song/blob/master/package.json)

With all dependencies installed, simply run:

`npm start` - It'll run `tsc` task that compile (or transpile) Typescript to Javascript 
And subsequently run `node server.js` task that starts a express server to run Angular2, Angular2 (or even 1) needs at least a basic http server to get up.

## Changing artist

To change artist, update [app.settings.ts](https://github.com/ndeitch/random-song/blob/master/app/app.settings.ts) to get artist's uri follow [this instructions](https://developer.spotify.com/web-api/user-guide/#spotify-uris-and-ids). Currently it isn't dynamic, so update the file and restart the server.
