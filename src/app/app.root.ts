import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.root.html',
  styleUrls: ['./app.root.sass']
})
export class AppRoot {
  data = {
    mod: '@chakray/marked',
    synopsis: 'angular + markdown',
    setup: {
      title: 'Installation',
      content: '# h1 \n\n*italic* __bold__'
    }
  };
}
