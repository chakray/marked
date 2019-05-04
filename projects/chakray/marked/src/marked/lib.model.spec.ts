import { MdLib as Klass } from './lib.model';

describe(Klass.name, () => {
  let k: Klass;
  beforeEach(() => {
    k = new Klass();
  });
  describe('.parse', () => {
    it('should return default string', () => {
      const input = 'input';
      expect(k.parse(input)).toEqual('default markedown parser - input');
    });
  });
});
