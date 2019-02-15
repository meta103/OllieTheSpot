const accessSignUp = document.querySelector('.signup-div');
const accessLogIn = document.querySelector('.login-div');
const accessButton = document.querySelector('.access-button');
const accessText = document.querySelector('.access-text');
const card = document.querySelector('.access-card');
const spotsCard = document.querySelector('.spots-card');
const spotsContainer = document.querySelector('.spots-container');
const spotsMap = document.querySelector('#show-map');
const coordinatesTest = document.getElementById('demo');


// spin the auth
accessButton.addEventListener('click', () => {
  accessSignUp.classList.toggle('hide');
  accessLogIn.classList.toggle('hide');
  card.classList.toggle('access-card-hover');
  if (accessButton.innerHTML === 'Log in') {
    accessText.innerHTML = 'Don\'t have an account yet?';
    accessButton.innerHTML = 'Sign up';
  } else {
    accessText.innerHTML = 'Do you have an account?';
    accessButton.innerHTML = 'Log in';
  }
});

// spin the map in spots
function turnmap() {
  spotsCard.classList.toggle('access-card-hover');
  spotsCard.classList.toggle('align-center');
  spotsContainer.classList.toggle('hide');
}
function main() {
  function getLocation() {
    console.log('GEOLOCATION FUNCTION CALLED');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      return showPosition;
    }
    x.innerHTML = 'Geolocation is not supported by this browser.';
  }

  function showPosition(position) {
    coordinatesTest.value = [position.coords.longitude, position.coords.latitude];
    console.log(`Latitude: ${position.coords.latitude
    } Longitude: ${position.coords.longitude}`);
    return [position.coords.longitude, position.coords.latitude];
  }
  getLocation();
}
