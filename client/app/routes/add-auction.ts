import Route from '@ember/routing/route';
import { service } from '@ember/service';
import PrivateRoute from 'client/routes/private';

export default class AddAuctionRoute extends PrivateRoute {
  @service store;
  async model() {
    const items = await this.store.findAll('item');

    return { items: items };
  }
}
