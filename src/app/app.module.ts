import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ChHeroMod } from '../hero';
import { AppRoot } from './app.root';

@NgModule({
  declarations: [
    AppRoot
  ],
  imports: [
    ChHeroMod,
    RouterModule.forRoot([]),
    BrowserModule
  ],
  bootstrap: [AppRoot]
})
export class AppModule { }
