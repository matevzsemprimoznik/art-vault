import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class BiddingButtonsComponent extends Component {
  @service store;
  @tracked valueToBid = parseFloat(this.args.auction.price);

  @action
  async placeBid(id: number) {
    await this.store
      .createRecord('bid', {
        price: this.valueToBid,
        auction_id: id,
      })
      .save();
    await this.store.findAll('auction');
    await this.store.findRecord('auction', id);
  }

  @action
  increaseBid() {
    this.valueToBid = this.valueToBid + 1;
  }

  @action
  decreaseBid() {
    this.valueToBid = this.valueToBid - 1;
  }
}
