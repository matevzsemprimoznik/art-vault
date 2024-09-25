import Route from '@ember/routing/route';
import PrivateRoute from 'client/routes/private';
import { service } from '@ember/service';

export default class ArtsRoute extends PrivateRoute {
  @service store;

  async model() {
    const items = await this.store.findAll('item');
    return { items };
  }
}
