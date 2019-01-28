import formView from './formView';
export default {
  init: function(container, onNewData) {
    const obj = formView.render();
    const form = obj.form;
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const firstName = obj.firstName.value;
      const lastName = obj.lastName.value;
      const age = obj.age.value;
      if (typeof onNewData === 'function') {
        onNewData({firstName: firstName, lastName: lastName, age: age});
      }

      obj.firstName.value = "";
      obj.lastName.value = "";
      obj.age.value = "";
    });

    container.appendChild(form);
  }
};
