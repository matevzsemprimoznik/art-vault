import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PrivateRoute extends Route {
  @service('auth') auth;
  @service() router;

  async beforeModel() {
    const isAuthenticated = await this.auth.isAuthenticated();
    if (!isAuthenticated) {
      this.router.transitionTo('/');
    }
  }
}
