function setupSubscribeButton() {
    const buttonElement = document.getElementById('subscribeButton');
    buttonElement.addEventListener('click', async () => await subscribe());
};

function cleanupSubscribeButton() {
    const buttonElement = document.getElementById('subscriberButton');
    buttonElement.removeEventListener(buttonElement);
};

async function subscribe() {
    const name = document.querySelector('#nameInput');
    if (!name.value) {
        alert('name required');
        return;
    }

    const email = document.querySelector('#emailInput');
    if (!email.value) {
        alert('email required');
        return;
    }

    const response = await fetch(`${import.meta.env.VITE_API_URL}/subscriptions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${name.value}&email=${email.value}`
    });
    if (response.ok) {
        alert('You have subscribed. Look out for an email to confirm!');
    } else {
        alert('Unable to subrcibe at this time. Please try again latter');
    }
}

export default { setupSubscribeButton, cleanupSubscribeButton };
