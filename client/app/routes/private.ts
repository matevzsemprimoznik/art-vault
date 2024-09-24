import Route from '@ember/routing/route';
import Ember from 'ember';
import { service } from '@ember/service';

export default class PrivateRoute extends Route {
  @service('auth') auth;
  @service() router;

  beforeModel() {
    console.log(this.auth, 'autthththht');
    if (!this.auth.user) {
      this.router.transitionTo('/');
    }
  }
}
