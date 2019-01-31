import model from './model';
import view from './view';

export default {
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
