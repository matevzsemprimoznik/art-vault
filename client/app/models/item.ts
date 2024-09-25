import Model, { attr } from '@ember-data/model';

export default class ItemModel extends Model {
  @attr name;
  @attr description;
  @attr image;
  @attr start_price;
  @attr start_date;
  @attr end_date;
}
