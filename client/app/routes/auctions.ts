import Route from '@ember/routing/route';
import PrivateRoute from 'client/routes/private';
import { service } from '@ember/service';

export default class AuctionsRoute extends PrivateRoute {
  @service store;

  async model() {
    const auctions = await this.store.findAll('auction');
    return { auctions };
  }
}
