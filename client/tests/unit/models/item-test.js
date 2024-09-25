import { setupTest } from 'client/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | item', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('item', {});
    assert.ok(model, 'model exists');
  });
});
