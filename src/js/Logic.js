/* eslint-disable no-console */
export default class Logic {
  constructor(gui) {
    this.gui = gui;
    this.showPopover = this.showPopover.bind(this);
    this.hidePopover = this.hidePopover.bind(this);
  }

  init() {
    this.gui.drawUI();
    this.gui.form.addEventListener('click', this.showPopover);
    this.gui.widget.addEventListener('click', this.hidePopover);
  }

  hidePopover(e) {
    if (e.target === this.gui.input || e.target === this.gui.button) return;
    this.gui.popover.classList.add('hidden');
  }

  showPopover(e) {
    e.preventDefault();
    const position = e.target.getBoundingClientRect();

    this.gui.popover.classList.remove('hidden');
    const height = e.target.offsetHeight;
    const width = e.target.offsetWidth;

    if (e.target === this.gui.input) {
      this.gui.popover.style.left = `${(position.left + width / 2 - 240 / 2).toFixed(1)}px`;
      this.gui.popover.style.top = `${(position.top - this.gui.popover.offsetHeight - 5).toFixed(1)}px`;
      this.gui.popoverTitle.innerHTML = 'Input';
    }
    if (e.target === this.gui.button) {
      this.gui.popoverTitle.innerHTML = 'Button';
      this.gui.popover.style.left = `${(position.right + 5).toFixed(1)}px`;
      this.gui.popover.style.top = `
      ${(position.top + height / 2 - this.gui.popover.offsetHeight / 2).toFixed(1)}px`;
    }
  }
}
