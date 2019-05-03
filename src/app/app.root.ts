import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.root.html',
  styleUrls: ['./app.root.sass']
})
export class AppRoot {
  mod = '@chakray/marked';
  synopsis = 'angular + markdown'
  installation = '# h1 \n\n*italic* __bold__';
}
