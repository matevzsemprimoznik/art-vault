import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service('auth') auth;

  beforeModel() {
    this.auth.isAuthenticated();
  }
}
