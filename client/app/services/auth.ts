import Service from '@ember/service';
import { computed } from '@ember/object';
import config from 'client/config/environment';
import { tracked } from '@glimmer/tracking';

export default class AuthService extends Service {
  @tracked user = null;
  get auth0() {
    return new auth0.WebAuth({
      domain: config.auth0.domain, // domain from auth0
      clientID: config.auth0.clientId, // clientId from auth0
      redirectUri: config.auth0.callbackUrl,
      audience: `https://${config.auth0.domain}/userinfo`,
      responseType: 'token',
      scope: 'openid profile', // adding profile because we want username, given_name, etc.
    });
  }

  /**
   * Send a user over to the hosted auth0 login page
   */
  login() {
    console.log('delaaa');
    this.auth0.authorize();
  }

  /**
   * When a user lands back on our application
   * Parse the hash and store user info
   */
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      console.log(this.auth0.parseHash);
      this.auth0.parseHash((err, authResult) => {
        console.log('----------------------', err, authResult);
        if (err) {
          return reject(err);
        }

        if (authResult && authResult.accessToken) {
          this.setUser(authResult.accessToken);
        }

        return resolve();
      });
    });
  }

  /**
   * Computed to tell if a user is logged in or not
   * @return boolean
   */
  @computed
  get isAuthenticated() {
    return this.checkLogin();
  }

  /**
   * Use the token to set our user
   */
  setUser(token) {
    this.auth0.client.userInfo(token, (err, profile) => {
      console.log('setUser', profile);
      if (!err) {
        this.set('user', profile);
      }
    });
  }

  /**
   * Check if we are authenticated using the auth0 library's checkSession
   */
  checkLogin() {
    this.auth0.checkSession({}, (err, authResult) => {
      if (!err && authResult) {
        this.setUser(authResult.accessToken);
        return true;
      }
    });
  }

  /**
   * Get rid of everything in sessionStorage that identifies this user
   */
  logout() {
    this.auth0.logout({
      clientID: config.auth0.clientId,
      returnTo: 'http://localhost:4200',
    });
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:auth')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('auth') declare altName: AuthService;`.
declare module '@ember/service' {
  interface Registry {
    auth: AuthService;
  }
}
