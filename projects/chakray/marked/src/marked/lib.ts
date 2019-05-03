import { InjectionToken } from '@angular/core';

export function mockMdLib() {
  return new MdLib();
}

/**
 * common wrapper interface for markdown parser libraries
 */
export class MdLib {
  constructor() {}
  /**
   * @param str markdown string
   * @return html string
   */
  parse(str): string {
    return 'default markedown parser - ' + str;
  }
}

export const mdLib = new InjectionToken<MdLib>('cm-mdlib', {
  providedIn: 'root',
  factory: mockMdLib
});
