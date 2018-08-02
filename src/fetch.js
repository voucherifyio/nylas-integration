const nylasApiUrl = 'https://api.nylas.com';
const fetch = (clientId) => {
    const formResultDiv = document.getElementById('fetch-result');
    const form = document.getElementById("fetch");
    const clientSecret = form.secret.value;
    const code = form.code.value;
    const data = JSON.stringify(false);
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            formResultDiv.innerText = this.responseText;
        }
    });
    xhr.open("POST", `${nylasApiUrl}/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=authorization_code&code=${code}`);
    xhr.send(data);
};