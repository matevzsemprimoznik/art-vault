import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AuctionsController extends Controller {
  @tracked searchTerm = '';
  @tracked filteredAuctions = this.model.auctions;

  @action
  search(event) {
    this.searchTerm = event.target.value.toLowerCase();
    this.filterAuctions();
  }

  filterAuctions() {
    if (this.searchTerm && this.searchTerm !== '') {
      this.filteredAuctions = this.model.auctions.filter((auction) =>
        auction.name.toLowerCase().includes(this.searchTerm),
      );
    } else {
      this.filteredAuctions = this.model.auctions;
    }
  }
}
