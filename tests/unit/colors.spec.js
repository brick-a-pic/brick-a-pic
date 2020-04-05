import * as colors from '@/colors';

describe('colors.js', () => {
  it('matches closest colors', () => {
    expect(colors.closestMatch([255, 255, 255], [0, 1, 2], false)).toEqual([242, 243, 242]);
    expect(colors.closestMatch([255, 255, 255], [0, 1, 2], true)).toEqual([242, 243, 242]);
  });
});
