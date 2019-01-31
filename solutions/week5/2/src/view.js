export default {
  p: undefined,
  init: function(element, count, onClick) {
    let container = document.createElement('div');
    let p = document.createElement('p');
    p.textContent = count;
    let button = document.createElement('button');
    button.textContent = "Click me!";
    button.addEventListener('click', onClick);

    this.p = p;
    container.appendChild(p);
    container.appendChild(button);

    element.appendChild(container);
  },
  update: function(newCount) {
    let p = this.p;
    p.textContent = newCount;
  }
};
