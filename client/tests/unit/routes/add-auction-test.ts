import { module, test } from 'qunit';
import { setupTest } from 'client/tests/helpers';

module('Unit | Route | add-auction', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const route = this.owner.lookup('route:add-auction');
    assert.ok(route);
  });
});
