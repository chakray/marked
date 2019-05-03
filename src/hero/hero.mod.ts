import { NgModule } from '@angular/core';

import * as marked from 'marked';
import { CmMarkedMod, mdLib, MarkedLib } from '@chakray/marked';

import { ChHeroTag } from './hero.tag';

export function mdFac() {
  return new MarkedLib(marked);
}

@NgModule({
  imports: [
    CmMarkedMod,
  ],
  providers: [
    { provide: mdLib, useFactory: mdFac }
  ],
  declarations: [ChHeroTag],
  exports: [ChHeroTag]
})
export class ChHeroMod {}
