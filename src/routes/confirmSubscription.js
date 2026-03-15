const onLoad = async () => {
    const baseUrl = window.location.href;
    const path = new URL(baseUrl).pathname;
    const paramString = baseUrl.split('?')[1];
    const queryString = new URLSearchParams(paramString);
    const response = await fetch(`${import.meta.env.VITE_API_URL}${path}?${queryString}`);
    if (!response.ok) {
        alert('Unable to confirm subscription at this time.');
    } 
};

const html = `
  <h1>Subscription to Zero 2 Production Confirmed!</h1>
  <h3>Thank you for subscribing!</h3>
  <p>You will now recieve emails notifying you of new blog posts. Stay tuned!</p>
`;

export default { html, onLoad };
