(function () {
  'use strict';

  var model = {
    count: 0,
    getCount: function() {
      return this.count;
    },
    increment: function() {
      this.count += 1;
    },
  };

  var view = {
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

  var controllerRoll = {
    init: function() {
      let main = document.querySelector('main');
      view.init(main, model.getCount(), () => {
        if (this.t) {
          clearInterval(this.t);
          this.t = null;
        } else {
          this._createInterval();
        }
      });
      this._createInterval();
    
    },
    _createInterval: function() {
      this.t = setInterval(function() {
        model.increment();
        view.update(model.getCount());
      }, 1000);
    }
  };

  controllerRoll.init();

}());
