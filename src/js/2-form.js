const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

// const email = input.value;
// const message = textarea.value;

let formObject = {
  email: '',
  message: '',
};

const getInfoForm =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};

function reloadPage() {
  if (getInfoForm) {
    input.value = getInfoForm.email;
    textarea.value = getInfoForm.message;
  }
}

form.addEventListener('input', event => {
  const nodeName = event.target.nodeName;
  console.log(nodeName);

  if (nodeName === 'INPUT' || nodeName === 'TEXTAREA') {
    formObject = {
      email: input.value.trim(),
      message: input.value.trim(),
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
  }
});
reloadPage();
form.addEventListener('submit', event => {
  event.preventDefault();

  if (input.value === '' || input.value === '') {
    alert('Complete all the ribbons!');
  } else {
    console.log(submitObject);
  }

  form.reset();
  localStorage.removeItem('feedback-form-state');
});
