const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

let formObject = {
  email: '',
  message: '',
};

const getInfoForm =
  JSON.parse(localStorage.getItem('feedback-form-state')) || [];
reloadPage();
function reloadPage() {
  if (getInfoForm) {
    input.element.value = getInfoForm.email;
    textarea.value = getInfoForm.message;

    // formObject = {
    //   email: getInfoForm.email,
    //   message: getInfoForm.message,
    // };
  }
}

form.addEventListener('input', event => {
  const nodeName = event.target.nodeName;

  if (nodeName === 'INPUT' || nodeName === 'TEXTAREA') {
    formObject = {
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
