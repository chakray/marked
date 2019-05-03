import { Inject, Injectable, InjectionToken } from '@angular/core';
import { MdLib, mdLib } from './lib';

@Injectable({ providedIn: 'root' })
export class MarkedService {
  constructor(@Inject(mdLib) lib: MdLib) { }
}
