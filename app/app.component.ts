import { Component } from '@angular/core';

@Component({
  selector: 'random-song',
  template: `
  <h1>{{title}}</h1>
  <p>Initial Commit</p>
  `
})
export class AppComponent {
  title = 'Random Song';
}
