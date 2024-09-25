import EmberRouter from '@ember/routing/router';
import config from 'client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('auctions');
  this.route('auction', { path: '/auctions/:auction_id' });
  this.route('callback');
  this.route('add-art');
  this.route('add-auction');
});
