import './scss/main.scss';

import img from './images/smurf.png';

function doSomething() {
  const body = document.querySelector('body');
  const image = document.createElement('img');

  image.src = img;

  body.appendChild(image);
}

doSomething();