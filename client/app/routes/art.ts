import Route from '@ember/routing/route';
import type Transition from '@ember/routing/transition';

interface ArtRouteParams {
  art_id: string;
}
export default class ArtRoute extends Route {
  model(
    params: ArtRouteParams,
    transition: Transition,
  ): PromiseLike<unknown> | unknown {
    return { artId: params.art_id };
  }
}
