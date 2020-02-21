import { formatDimension, formatWeight, formatDate } from './format';

describe('format', () => {
  describe('formatDimension', () => {
    it('should add at least one fraction number', () => {
      expect(formatDimension(1, 'fi')).toMatch('1,0');
    });

    it('should add "m" unit to to the supplied value', () => {
      expect(formatDimension(1, 'fi')).toMatch('m');
    });

    it('should return "-" if the value is undefined/null', () => {
      expect(formatDimension()).toBeNull();
      expect(formatDimension(null)).toBeNull();
    });
  });

  describe('formatWeight', () => {
    it('should add "kg" unit to to the supplied value', () => {
      expect(formatWeight(1, 'fi')).toMatch('kg');
    });

    it('should return "-" if the value is undefined/null', () => {
      expect(formatWeight()).toBeNull();
      expect(formatWeight(null)).toBeNull();
    });
  });

  describe('formatDate', () => {
    it('should format the date according to the supplied locale', () => {
      expect(
        formatDate('2018-11-28T12:26:28.146227+00:00', 'fi')
      ).toMatchSnapshot();
    });
  });
});
