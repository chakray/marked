import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import * as marked from 'marked';
import { CmMarkedMod, mdLib, MarkedLib } from '@chakray/marked';

import { AppComponent } from './app.component';

export function mdFac() {
  return new MarkedLib(marked);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    CmMarkedMod,
    BrowserModule
  ],
  providers: [
    { provide: mdLib, useFactory: mdFac }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
