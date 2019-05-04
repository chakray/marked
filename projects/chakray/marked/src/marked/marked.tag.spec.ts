import { Spec, Ref } from '../../testing';

import { CmEnrouteAttr } from './enroute.attr';
import { CmMarkedTag as Tag } from './marked.tag';

Spec.outline(Tag, (ref: Ref) => {
  let tag;
  beforeEach(() => {
    tag = ref.tag;
  });
  ref.prop('str', () => {
    it('should update tag.html', () => {
      expect(tag.html).toBeFalsy();
      tag.str = '#test';
      expect(tag.html).toBeTruthy();
    });
  });
});
