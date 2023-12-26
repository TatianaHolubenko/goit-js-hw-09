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
  const value = event.target.value;
  const nodeName = event.target.nodeName;

  if (nodeName === 'INPUT') {
    formObject.email = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
  } else if (nodeName === 'TEXTAREA') {
    formObject.message = value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formObject.email || !formObject.message) {
    alert('Please, fill in all fields!');
  } else {
    console.log(formObject);
  }

  localStorage.removeItem('feedback-form-state');
  form.reset();
});
