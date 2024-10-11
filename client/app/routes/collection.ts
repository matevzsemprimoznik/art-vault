import PrivateRoute from 'client/routes/private';
import { service } from '@ember/service';

export default class CollectionRoute extends PrivateRoute {
  @service store;

  async model() {
    const items = await this.store.findAll('item');
    return { items };
  }
}
