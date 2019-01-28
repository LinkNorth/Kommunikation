export default {
  render: function() {
    const form = document.createElement('form');

    const firstName = document.createElement('input');
    firstName.type = 'text';
    firstName.setAttribute('placeholder', 'First name');

    const lastName = document.createElement('input');
    lastName.type = 'text';
    lastName.setAttribute('placeholder', 'Last name');

    const age = document.createElement('input');
    age.type = 'number';
    age.setAttribute('placeholder', 'Age');

    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Submit';

    form.appendChild(firstName);
    form.appendChild(lastName);
    form.appendChild(age);
    form.appendChild(submit);

    return {
      form: form,
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
  }
};
