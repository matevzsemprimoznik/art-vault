import Service from '@ember/service';
import { computed } from '@ember/object';
import config from 'client/config/environment';
import { tracked } from '@glimmer/tracking';
import auth0 from 'auth0-js';

export default class AuthService extends Service {
  @tracked user = null;
  @tracked token = null;
  get auth0() {
    return new auth0.WebAuth({
      domain: config.auth0.domain as string,
      clientID: config.auth0.clientId as string,
      redirectUri: `${config.APP.URL}/callback`,
      audience: `https://${config.auth0.domain}/api/v2/`,
      responseType: 'token id_token',
      scope: 'openid profile',
    });
  }

  login() {
    this.auth0.authorize();
  }

  /**
   * When a user lands back on our application
   * Parse the hash and store user info
   */
  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
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
   * Use the token to set our user
   */
  setUser(token) {
    this.auth0.client.userInfo(token, async (err, profile) => {
      if (!err) {
        this.set('user', profile);
      }
    });
  }

  /**
   * Check if we are authenticated using the auth0 library's checkSession
   */
  async isAuthenticated(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (err || !authResult) {
          console.error('Error during checkSession:', err);
          resolve(false);
        } else {
          this.setUser(authResult.accessToken);
          this.token = authResult.idToken;
          resolve(true);
        }
      });
    });
  }

  /**
   * Get rid of everything in sessionStorage that identifies this user
   */
  logout() {
    this.auth0.logout({
      clientID: config.auth0.clientId as string,
      returnTo: config.APP.URL as string,
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
