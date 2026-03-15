import indexModule from './routes/index.js';
import confirmSubscriptionModule from './routes/confirmSubscription.js';
import notFoundModule from './notFound.js';

const modules = {
    '/': indexModule,
    '/subscriptions/confirm': confirmSubscriptionModule,
    '404': notFoundModule,
};

let currentModule = null;

const app = document.getElementById('app');
const router = async () => {
    const path = location.pathname || '/';

    if (typeof currentModule?.cleanup === 'function') {
        currentModule.cleanup();
    }

    currentModule = modules[path] || modules['404'];
    
    app.innerHTML = currentModule.html;

    if (typeof currentModule?.onLoad === 'function') {
        currentModule.onLoad();
    }
};

window.addEventListener('load', router);
window.addEventListener('hashChange', router);
