import { InjectionToken } from '@angular/core';
import { MdLib } from './lib';

export function mockMdLib() {
  return new MdLib();
}

export const mdLib = new InjectionToken<MdLib>('cm-mdlib', {
  providedIn: 'root',
  factory: mockMdLib
});
