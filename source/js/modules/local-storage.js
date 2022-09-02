const setLocalStorage = (userName, userPhone, userEmail) => {
  userName.addEventListener('focusout', (evt) => {
    localStorage.setItem(evt.target.id, userName.value);
  });

  userPhone.addEventListener('focusout', (evt) => {
    localStorage.setItem(evt.target.id, userPhone.value);
  });

  userEmail.addEventListener('focusout', (evt) => {
    localStorage.setItem(evt.target.id, userEmail.value);
  });
};

const getLocalStorage = () => {
  const userName = document.querySelector('#name');
  const userPhone = document.querySelector('#phone');
  const userEmail = document.querySelector('#mail');

  setLocalStorage(userName, userPhone, userEmail);
};

export {getLocalStorage};
