const {assert} = require('chai');

describe('User visits root', () => {
  describe('without existing items', () => {
    it('starts blank', () => {
      browser.url('/');
      assert.equal(browser.getText('#items-container'), '');
    });
  });
  describe('can navigate', () => {
    it('to the create page', () => {
      // Setup
      browser.url('/');
      // Exercise
      browser.click('a[href="/items/create"]');
      // Verify
      assert.include(browser.getText('body'), 'Create');
    });
  });
});
