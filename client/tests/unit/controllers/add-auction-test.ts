import { module, test } from 'qunit';
import { setupTest } from 'client/tests/helpers';

module('Unit | Controller | add-auction', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:add-auction');
    assert.ok(controller);
  });
});
