import { module, test } from 'qunit';
import { setupTest } from 'client/tests/helpers';

module('Unit | Controller | auctions', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:auctions');
    assert.ok(controller);
  });
});
