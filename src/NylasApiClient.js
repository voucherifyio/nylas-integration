require('dotenv').config();
const request = require("request");
const when = require("when");

const ERROR_CODES = {
    INVALID_REQUEST: 'invalid_request_error'
};

const nylasApiUrl = 'https://api.nylas.com';
const clientId = '36n3ovomd633uzr1ss75pqsvv';
const clientSecret = process.env.NYLAS_APP_SECRET;

const authAndFire = (url) => {
    return when.promise((resolve, reject) => {
        const baseAuthString = Buffer.from(`${clientSecret}:${clientId}`).toString('base64');
        const options = {
            method: 'POST',
            url: url,
            headers: {Authorization: `Basic ${baseAuthString}`}
        };

        request(options, function (error, response, body) {
            if (error) reject(error);
            if (body.type === ERROR_CODES.INVALID_REQUEST) reject(body);

            resolve(body);
        });
    });
};

const deregister = (accountId) => {
    return authAndFire(`${nylasApiUrl}/a/${clientId}/accounts/${accountId}/downgrade`);
};

const register = (accountId) => {
    return authAndFire(`${nylasApiUrl}/a/${clientId}/accounts/${accountId}/upgrade`);
};

const accessToken = (code) => {
    return authAndFire(`${nylasApiUrl}/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=authorization_code&code=${code}`);
};

const email = (body, subject, token, sender, recipient) => {
    return when.promise((resolve, reject) => {
        const options = {
            method: 'POST',
            url: nylasApiUrl + '/send',
            headers:
                {
                    authorization: token
                },
            body:
                {
                    subject: subject,
                    from: sender,
                    to: recipient,
                    body: body
                },
            json: true
        };

        request(options, function (error, response, body) {
            if (error) reject(error);
            if (body.type === ERROR_CODES.INVALID_REQUEST) reject(body);

            resolve(body);
        });
    });
};


module.exports = {
    deregister,
    register,
    accessToken,
    email
};