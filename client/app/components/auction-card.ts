import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface AuctionCardArgs {
  price: string;
}

export default class AuctionCardComponent extends Component<AuctionCardArgs> {
  @tracked selectedId = null;

  @action
  onClickPlaceBid(id) {
    this.selectedId = id;
  }
}
