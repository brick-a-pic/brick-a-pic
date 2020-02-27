import * as colors from '@/colors';

describe('colors.js', () => {
  it('matches closest colors', () => {
    expect(colors.closestMatch([255, 255, 255])).toEqual([242, 243, 242]);
    expect(colors.closestMatch([255, 0, 0])).toEqual([227, 0, 11]);
  });
});
