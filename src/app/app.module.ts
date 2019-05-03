import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import * as marked from 'marked';
import { CmMarkedMod, mdLib, MarkedLib } from '@chakray/marked';

import { AppRoot } from './app.root';

export function mdFac() {
  return new MarkedLib(marked);
}

@NgModule({
  declarations: [
    AppRoot
  ],
  imports: [
    RouterModule.forRoot([]),
    CmMarkedMod,
    BrowserModule
  ],
  providers: [
    { provide: mdLib, useFactory: mdFac }
  ],
  bootstrap: [AppRoot]
})
export class AppModule { }
