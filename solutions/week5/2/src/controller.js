import model from './model';
import view from './view';

export function init() {
  let main = document.querySelector('main');
  view.init(main, model.getCount(), function() {
    model.increment();
    view.update(model.getCount());
  });
}
