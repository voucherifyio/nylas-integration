const request = require("request");
const nylasApiUrl = 'https://api.nylas.com';
const DOWNGRADE = 'downgrade';
const UPGRADE = 'upgrade';

const fire = (clientSecret, clientId, accountId, type) => {
    if (type !== DOWNGRADE && type !== UPGRADE) {
        console.error("Invalid registar fired");

        return;
    }

    const options = {
        method: 'POST',
        url: `${nylasApiUrl}/a/${clientId}/accounts/${accountId}/${type}`,
        headers: {authorization: `${clientSecret}:${clientId}`}
    };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
    });
};

const deregister = (clientSecret, clientId, accountId) => {
    fire(clientSecret, clientId, accountId, DOWNGRADE);
};

const reregister = (clientSecret, clientId, accountId) => {
    fire(clientSecret, clientId, accountId, UPGRADE);
};

module.exports = {
    deregister, reregister
};