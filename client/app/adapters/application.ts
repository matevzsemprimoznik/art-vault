import JSONAPIAdapter from '@ember-data/adapter/json-api';
import DS from 'ember-data';
import { ModelRegistry } from 'ember-data/model';
import { service } from '@ember/service';
import ENV from 'client/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service('auth') auth;
  host = ENV.APP.API_URL as string;
  headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + this.auth.token,
  };
}
