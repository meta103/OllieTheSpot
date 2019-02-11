const accessSignUp = document.querySelector('#sign-up');
const accessLogIn = document.querySelector('#login');
const signUpButton = document.querySelector('.access-button');

signUpButton.addEventListener('click', () => {
  accessSignUp.classList.toggle('hide');
  accessLogIn.classList.toggle('hide');
  console.log('hi');
});
