import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';

export default class AddItemController extends Controller {
  @service store;
  @tracked item = {
    name: '',
    description: '',
    image: '',
    start_price: 0,
    start_date: '',
    end_date: '',
  };

  @action
  updateField(fieldName, event) {
    this.item[fieldName] = event.target.value;
  }

  @action
  async submitForm(event) {
    console.log('Submitting form:', this.item);
    event.preventDefault();

    try {
      await this.store.createRecord('item', this.item).save();
      console.log('Item added successfully:', this.item);
      this.resetForm();
    } catch (error) {
      console.error('Error adding item:', error);
    }
  }

  resetForm() {
    this.item = {
      name: '',
      description: '',
      image: '',
      start_price: 0,
      start_date: '',
      end_date: '',
    };
  }
}
