const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

let submitObject = {
  email: '',
  message: '',
};

const getInfoForm =
  JSON.parse(localStorage.getItem('feedback-form-state')) || [];

form.addEventListener('input', event => {
  const nodeName = event.target.nodeName;

  function reloadPage() {
    if (getInfoForm) {
      input.value = getInfoForm.email;
      textarea.value = getInfoForm.message;

      // submitObject = {
      //   email: getInfoForm.email,
      //   message: getInfoForm.message,
      // };
    }
  }
  reloadPage();
  if (nodeName === 'INPUT' || nodeName === 'TEXTAREA') {
    submitObject = {
      email: input.value.trim(),
      message: textarea.value.trim(),
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(submitObject));
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (input.value === '' || textarea.value === '') {
    alert('Complete all the ribbons!');
  } else {
    console.log(submitObject);
  }

  form.reset();
  localStorage.removeItem('feedback-form-state');
});
