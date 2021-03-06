import { HostBinding, Input, Component, Inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { MdLib, mdLib } from './lib';

/**
 * <cm-marked str='*markdown*'>
 */
@Component({
  selector: 'cm-marked',
  templateUrl: './marked.tag.html',
  styleUrls: ['./marked.tag.sass']
})
export class CmMarkedTag {
  @Input() baseUrl = '';
  /**
   * str for set markdown string
   */
  @Input() set str(v) {
    this._str = v;
    const r = this.lib.parse(v);
    this.html = this.sanitizer.bypassSecurityTrustHtml(r);
  }
  // @HostBinding('innerHtml')
  html: SafeHtml;
  private _str = '';
  /**
   * @param sanitizer see external DomSanitizer
   * @param lib see [[MdLib]]
   */
  constructor(private sanitizer: DomSanitizer,
              @Inject(mdLib) private lib: MdLib) { }
}
