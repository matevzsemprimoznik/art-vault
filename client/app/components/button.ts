import { action } from '@ember/object';
import Component from '@glimmer/component';

interface ButtonComponentArgs {
  buttonStyleType?: 'default' | 'ghost' | 'outline' | 'outline-white';
  onClick?: () => void;
  size: 'small' | 'medium' | 'large';
}

export default class ButtonComponent extends Component<ButtonComponentArgs> {
  get classes(): string {
    let twClasses =
      'bg-black text-white rounded-full font-semibold hover:bg-gray-800 active:bg-gray-700';
    if (this.args.buttonStyleType === 'outline')
      twClasses =
        'bg-transparent border border-neutral-dark text-gray-700 hover:bg-gray-200 active:bg-gray-300 font-semibold rounded-full';
    if (this.args.buttonStyleType === 'ghost')
      twClasses =
        'bg-transparent text-gray-700 hover:bg-gray-200 active:bg-gray-300 font-semibold rounded-full';
    if (this.args.buttonStyleType === 'outline-white')
      twClasses =
        'border border-gray-200 text-gray-700 hover:bg-gray-200 active:bg-gray-300 font-semibold rounded-full bg-white';
    if (this.args.size === 'small') twClasses += ' px-5 py-3 text-sm';
    else if (this.args.size === 'large') twClasses += ' px-10 py-4 text-lg';
    else twClasses += ' px-8 py-3.5 text-base';
    return twClasses;
  }

  @action
  onClick() {
    if (this.args.onClick) this.args.onClick();
  }
}
