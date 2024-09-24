import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default class CallbackRoute extends Route {
  @service('auth') auth;
  @service() router;

  async beforeModel() {
    await this.auth.handleAuthentication();
    this.router.transitionTo('/arts');
  }
}
