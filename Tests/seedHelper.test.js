const helper = require('../database/seedHelpers.js');

test('returns an array with length between 6 & 15', () => {
  const tags = helper.tags();
  const length = tags.length;
  expect(Array.isArray(tags)).toBe(true);
  expect(length).toBeGreaterThanOrEqual(6);
  expect(length).toBeLessThanOrEqual(15);
});
