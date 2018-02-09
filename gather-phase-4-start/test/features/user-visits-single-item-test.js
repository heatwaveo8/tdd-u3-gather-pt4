const {assert} = require('chai');
const {buildItemObject} = require('../test-utils');

describe('User visits the create page', () => {
  describe('posts a new single item', () => {
    it('and visits', () => {
      const itemToCreate = buildItemObject();

      browser.url('/items/create');
      browser.setValue('#title-input', itemToCreate.title);
      browser.setValue('#description-input', itemToCreate.description);
      browser.setValue('#imageUrl-input', itemToCreate.imageUrl);
      browser.click('#submit-button');

      browser.url('/');
      browser.click('.item-card a');

      assert.include(browser.getText('#item-description'), itemToCreate.description);
    });
  });
});
