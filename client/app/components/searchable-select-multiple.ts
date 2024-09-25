import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

interface Item {
  id: number;
  name: string;
}
interface SearchableSelectMultipleArgs {
  availableItems: Item[];
  onAddItem: (item: Item) => void;
  onRemoveItem: (item: Item) => void;
  onQueryChange: (query: string) => void;
}

export default class SearchableSelectMultipleComponent extends Component<SearchableSelectMultipleArgs> {
  @tracked query = '';
  @tracked dropdownOpened = false;

  @action
  updateQuery(event) {
    this.query = event.target.value;
    this.args.onQueryChange(this.query);
  }

  @action
  addItem(item) {
    this.args.onAddItem(item);
    this.query = '';
  }

  @action
  removeItem(item) {
    this.args.onRemoveItem(item);
  }

  @action
  openDropdown() {
    this.dropdownOpened = true;
  }

  @action
  clickedOutside(event) {
    const classList = Array.from(event.target.classList) || [];
    if (
      classList.length !== 0 &&
      !classList.includes('searchable-select-item')
    ) {
      this.dropdownOpened = false;
    }
  }
}
