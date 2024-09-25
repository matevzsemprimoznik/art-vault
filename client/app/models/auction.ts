import Model, { attr } from '@ember-data/model';

export default class AuctionModel extends Model {
  @attr name;
  @attr description;
  @attr start_price;
  @attr start_date;
  @attr end_date;
  @attr item_ids;
  @attr items;
}
