import formController from './form/formController';
import tableController from './table/tableController';

const main = document.querySelector('main');
formController.init(main, function(data) {
  tableController.addData(data);
});

tableController.init(main);
