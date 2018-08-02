const redirect = (email, clientId, redirectUrl) => {
    const nylasApiUrl = 'https://api.nylas.com';
    window.location.href = `${nylasApiUrl}/oauth/authorize?client_id=${clientId}&response_type=code&scope=${email}&login_hint=${email}&redirect_uri=${redirectUrl}`;
};