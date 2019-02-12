const accessSignUp = document.querySelector('#sign-up');
const accessLogIn = document.querySelector('#login');
const accessButton = document.querySelector('.access-button');
const accessText = document.querySelector('.access-text');
const card = document.querySelector('.access-card');
const coordinatesTest = document.querySelector('#demo');

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

function getLocation() {
  console.log('GEOLOCATION FUNCTION CALLED');
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  coordinatesTest.innerHTML = `${position.coords.latitude},${position.coords.longitude}`;
  console.log("Latitude: " + position.coords.latitude +
    " Longitude: " + position.coords.longitude);
}
