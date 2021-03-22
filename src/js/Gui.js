export default class Gui {
  constructor() {
    this.form = document.querySelector('.form form');
    this.input = this.form.querySelector('input');
    this.button = this.form.querySelector('button');

    this.popover = document.querySelector('.popover');
    this.popoverTitle = document.querySelector('.popover h3');
    this.popoverBody = document.querySelector('.popover div');

    this.widget = document.querySelector('.widget');
  }

  drawUI() {
    this.popoverBody.innerHTML = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry';
  }
}
