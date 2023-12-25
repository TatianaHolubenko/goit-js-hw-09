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
    // formObject = {
    //   email: input.value.trim(),
    //   message: textarea.value.trim(),
    // };
    formObject = {
      email: event.target.value.trim(),
      message: event.target.value.trim(),
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (formObject.email === '' || formObject.message === '') {
    alert('Please, fill in all fields!');
  } else {
    console.log(formObject);
  }

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
