import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

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
      content: ''
    }
  };
  constructor(private title: Title,
              private http: HttpClient) {
    title.setTitle(this.data.mod);
    const url = 'https://raw.githubusercontent.com/chakray/marked/master/notes/setup.md';
    http.get(url, { responseType: 'text' }).subscribe(d => {
      const [title, ...content] = d.split('\n');
      const o = { title: title.split(' ')[1], content: content.join('\n') };
      Object.assign(this.data.setup, o);
    });
  }
}
