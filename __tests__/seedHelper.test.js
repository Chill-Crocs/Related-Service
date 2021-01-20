const helper = require('../database/seedHelpers.js');


describe('Seed Helpers Tests', () => {
  test('Details function returns an array with length between 6 & 15', () => {
    const details = helper.details();
    const length = details.length;
    expect(Array.isArray(details)).toBe(true);
    expect(length).toBeGreaterThanOrEqual(1);
    expect(length).toBeLessThanOrEqual(4);
  });

  test('Generate From this shop function returns an array with length between 5 & 10', () => {
    const shopItems = helper.fromShop();
    const length = shopItems.length;
    expect(Array.isArray(shopItems)).toBe(true);
    expect(length).toBeGreaterThanOrEqual(5);
    expect(length).toBeLessThanOrEqual(10);
  });

  test('Generate related items function returns an array with length between 5 & 10', () => {
    const relatedItems = helper.relatedItems();
    const length = relatedItems.length;
    expect(Array.isArray(relatedItems)).toBe(true);
    expect(length).toBeGreaterThanOrEqual(5);
    expect(length).toBeLessThanOrEqual(10);
  })

});
