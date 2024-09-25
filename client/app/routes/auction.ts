import Route from '@ember/routing/route';
import type Transition from '@ember/routing/transition';
import { service } from '@ember/service';
import PrivateRoute from 'client/routes/private';

interface ArtRouteParams {
  auction_id: string;
}
export default class AuctionRoute extends PrivateRoute {
  @service store;
  async model(
    params: ArtRouteParams,
    transition: Transition,
  ): PromiseLike<unknown> | unknown {
    const auction = await this.store.findRecord('auction', params.auction_id);
    return { auction };
  }
}
