import {convertFahrToCels} from '../../src/components/common/utils';

describe('convertFahrToCels', () => {

  describe('', () => {

    it('should convert 0 F to -18 C', () => {
      expect(convertFahrToCels(0)).toEqual(-18);
    });

    it('should convert 32 F to 0 C', () => {
      expect(convertFahrToCels(32)).toEqual(0);
    });

    it('should convert 77 F to 25 C', () => {
      expect(convertFahrToCels(77)).toEqual(25);
    });

  });

});
