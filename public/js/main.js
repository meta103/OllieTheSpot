const accessSignUp = document.querySelector('#sign-up');
const accessLogIn = document.querySelector('#login');
const signUpButton = document.querySelector('.access-button');
const accessText = document.querySelector('.access-text');


signUpButton.addEventListener('click', () => {
  accessSignUp.classList.toggle('hide');
  accessLogIn.classList.toggle('hide');
  if (signUpButton.innerHTML === 'Log in') {
    accessText.innerHTML = 'Don\'t have an account yet?';
    signUpButton.innerHTML = 'Sign up';
  } else {
    accessText.innerHTML = 'Do you have an account?';
    signUpButton.innerHTML = 'Log in';
  }
  console.log('hi');
});
