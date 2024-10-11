import PrivateRoute from 'client/routes/private';
import { service } from '@ember/service';

interface ItemRouteParams {
  item_id: string;
}

export default class ItemRoute extends PrivateRoute {
  @service store;
  async model(params: ItemRouteParams): PromiseLike<unknown> | unknown {
    const item = await this.store.findRecord('item', params.item_id);
    return { item };
  }
}
