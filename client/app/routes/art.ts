import Route from '@ember/routing/route';
import type Transition from '@ember/routing/transition';
import { service } from '@ember/service';

interface ArtRouteParams {
  art_id: string;
}
export default class ArtRoute extends Route {
  @service store;
  async model(
    params: ArtRouteParams,
    transition: Transition,
  ): PromiseLike<unknown> | unknown {
    const artItem = await this.store.findRecord('item', params.art_id);
    return { artItem };
  }
}
