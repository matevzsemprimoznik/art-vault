import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AccordionComponent extends Component {
  @tracked isOpen = false;
  @tracked maxHeight = '0';

  @action
  toggleContent(event) {
    this.isOpen = !this.isOpen;

    const contentElement = event.target.nextElementSibling;
    if (this.isOpen) {
      this.maxHeight = contentElement.scrollHeight + 'px';
    } else {
      this.maxHeight = '0';
    }
  }
}
