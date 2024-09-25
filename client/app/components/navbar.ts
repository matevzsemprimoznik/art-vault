import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class NavbarComponent extends Component {
  @service('auth') auth;

  @action
  login() {
    console.log(this.auth);
    this.auth.login();
  }

  @action
  logout() {
    this.auth.logout();
  }
}
