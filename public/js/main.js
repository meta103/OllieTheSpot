const accessSignUp = document.querySelector('#sign-up');
const accessLogIn = document.querySelector('#login');
const accessButton = document.querySelector('.access-button');
const accessText = document.querySelector('.access-text');
const card = document.querySelector('.access-card');

accessButton.addEventListener('click', () => {
  // accessSignUp.classList.toggle('hide');
  // accessLogIn.classList.toggle('hide');
  card.classList.toggle('access-card-hover');
  if (accessButton.innerHTML === 'Log in') {
    accessText.innerHTML = 'Don\'t have an account yet?';
    accessButton.innerHTML = 'Sign up';
  } else {
    accessText.innerHTML = 'Do you have an account?';
    accessButton.innerHTML = 'Log in';
  }
  console.log('hi');
});
