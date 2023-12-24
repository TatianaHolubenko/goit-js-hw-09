const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

let formObject = {
  email: '',
  message: '',
};

const getInfoForm =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};

fillInfoForm();

function fillInfoForm() {
  if (getInfoForm) {
    input.value = getInfoForm.email || '';
    textarea.value = getInfoForm.message || '';
  }
}

form.addEventListener('input', event => {
  const nodeName = event.target.nodeName;

  if (nodeName === 'INPUT' || nodeName === 'TEXTAREA') {
    formObject = {
      email: input.value.trim(),
      message: textarea.value.trim(),
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (input.value === '' || textarea.value === '') {
    alert('Complete all the ribbons!');
  } else {
    console.log(formObject);
  }

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
