import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AddAuctionController extends Controller {
  @service store;
  @tracked auction = {
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    start_price: '',
  };
  @tracked items = this.model.items;
  @tracked availableItems = this.model.items;
  @tracked filteredItems = this.model.items;
  @tracked selectedItems = [];

  @action
  updateField(fieldName, event) {
    this.auction[fieldName] = event.target.value;
  }

  @action
  handleAddItem(item) {
    if (!this.selectedItems.includes(item)) {
      this.selectedItems = [...this.selectedItems, item];
      this.availableItems = this.availableItems.filter((i) => i !== item);
      this.filteredItems = this.availableItems;
    }
  }

  @action
  handleRemoveItem(item) {
    this.selectedItems = this.selectedItems.filter((i) => i !== item);
    this.availableItems = [...this.availableItems, item];
    this.filteredItems = this.availableItems;
  }

  @action
  async handleQueryChange(newQuery) {
    this.filteredItems = this.availableItems.filter((item) => {
      return item.name.toLowerCase().includes(newQuery.toLowerCase());
    });
  }

  @action
  async submitForm(event) {
    const auctionToSave = {
      ...this.auction,
      item_ids: this.selectedItems.map((item) => parseInt(item.id)),
    };
    console.log('Submitting form:', auctionToSave);
    event.preventDefault();

    try {
      await this.store.createRecord('auction', auctionToSave).save();
      console.log('Item added successfully:', auctionToSave);
      this.resetForm();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  }

  resetForm() {
    this.auction = {
      name: '',
      description: '',
      start_date: '',
      end_date: '',
      start_price: '',
    };
    this.selectedItems = [];
  }
}
