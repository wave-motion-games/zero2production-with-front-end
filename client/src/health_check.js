export default async function healthCheck() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/health_check`);
    if (!response.ok) {
        alert('failed to contact server. Some services may not be available');
        return;
    }
}
