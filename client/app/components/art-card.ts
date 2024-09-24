import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

interface ArtCardArgs {
  price: string;
}

export default class ArtCardController extends Component<ArtCardArgs> {
  @tracked selectedId = null;
  @tracked valueToBid = parseFloat(this.args.price);

  @action
  onClickPlaceBid(id) {
    console.log('Place bid for art with id:', id);
    this.selectedId = id;
  }

  @action
  increaseBid() {
    this.valueToBid = this.valueToBid + 10;
  }

  @action
  decreaseBid() {
    this.valueToBid = this.valueToBid - 10;
  }
}
