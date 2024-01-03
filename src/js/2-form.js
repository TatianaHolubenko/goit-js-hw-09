const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const storageKey = 'feedback-form-state';

const getInfoForm = JSON.parse(localStorage.getItem(storageKey)) || {};

const saveFormLocalStorage = () => {
  const formObject = {
    email: input.value.trim(),
    message: textarea.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(formObject));
};

const fillInfoForm = () => {
  if (getInfoForm) {
    input.value = getInfoForm.email || '';
    textarea.value = getInfoForm.message || '';
  }
};

fillInfoForm();

form.addEventListener('input', event => {
  const nodeName = event.target.nodeName;

  if (nodeName === 'INPUT' || nodeName === 'TEXTAREA') {
    saveFormLocalStorage();
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const { email, message } = getInfoForm;

  if (!email || !message) {
    alert('Please, fill in all fields!');
  } else {
    console.log({ email, message });
    localStorage.removeItem(storageKey);
    form.reset();
  }
});
