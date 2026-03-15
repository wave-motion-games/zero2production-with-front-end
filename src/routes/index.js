import '../style.css'
import healthCheck from '../routes/health_check.js';
import subscribe from '../routes/subscribe.js';

const onLoad = async () => {
    await healthCheck();
    subscribe.setupSubscribeButton();
};

const cleanup = () => {
    subscribe.cleanupSubscribeButton();
};

const html = `
  <h1>Welcome to Zero 2 production!</h1>
  <h3>Fill out the form  below to subscribe to my blog</h3>
  <input id="nameInput" type="text" placeholder="name" />
  <input id="emailInput" type="text" placeholder="email" />
  <button id="subscribeButton" >Subscribe</button>
`;

export default { html, onLoad, cleanup };
