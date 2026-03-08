import './style.css'
import healthCheck from './health_check.js';
import setupSubscribeButton from './subscribe.js';

await healthCheck();

document.querySelector('#app').innerHTML = `
  <h1>Welcome to Wave Motion Games!</h1>
  <h3>Fill out the form  below to subscribe to my blog</h3>
  <input id="nameInput" type="text" placeholder="name" />
  <input id="emailInput" type="text" placeholder="email" />
  <button id="subscribeButton" >Subscribe</button>
`;

setupSubscribeButton();
