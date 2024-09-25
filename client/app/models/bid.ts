import Model, { attr } from '@ember-data/model';

export default class BidModel extends Model {
  @attr price;
  @attr auction_id;
}
