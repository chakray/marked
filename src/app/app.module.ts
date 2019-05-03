import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ChHeroMod } from '../hero';
import { AppRoot } from './app.root';

@NgModule({
  declarations: [
    AppRoot
  ],
  imports: [
    HttpClientModule,
    ChHeroMod,
    RouterModule.forRoot([]),
    BrowserModule
  ],
  bootstrap: [AppRoot]
})
export class AppModule { }
